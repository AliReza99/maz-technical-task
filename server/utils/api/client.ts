export async function apiFetch(path: string): Promise<unknown> {
  const { apiBaseUrl } = useRuntimeConfig()
  if (!apiBaseUrl) {
    throw createError({ status: 500, statusText: 'NUXT_API_BASE_URL is not set' })
  }

  try {
    return await $fetch<unknown>(path, { baseURL: apiBaseUrl })
  } catch (error) {
    throw createError({ status: 502, statusText: 'Failed to reach the API', cause: error })
  }
}
