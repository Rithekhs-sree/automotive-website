export type ApiResult<T = unknown> = {
  success?: boolean
  message?: string
} & T

export type ContactFormData = {
  fullName: string
  phone: string
  email: string
  vehicle: string
  service: string
  message: string
}

export const API_BASE_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  'https://automotive-website-production.up.railway.app'

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const text = await response.text()

  if (!text) {
    throw new Error(`Empty response body from ${response.url}`)
  }

  try {
    return JSON.parse(text) as T
  } catch (error) {
    throw new Error(`Unable to parse JSON response from ${response.url}: ${text}`)
  }
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${path}`
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  })

  const data = await parseJsonResponse<T>(response)

  if (!response.ok) {
    const message =
      (data as { message?: string }).message ||
      `Request failed with status ${response.status}`
    throw new Error(message)
  }

  return data
}

export async function submitContactForm(
  payload: ContactFormData,
): Promise<ApiResult> {
  return apiFetch<ApiResult>('/api/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
