export async function apiFetch(path: string): Promise<unknown> {
  const { apiBaseUrl } = useRuntimeConfig()
  if (!apiBaseUrl) {
    throw createError({ statusCode: 500, statusMessage: 'NUXT_API_BASE_URL is not set' })
  }

  try {
    return await $fetch<unknown>(path, { baseURL: apiBaseUrl })
  } catch (error) {
    throw createError({ statusCode: 502, statusMessage: 'Failed to reach the API', cause: error })
  }
}
