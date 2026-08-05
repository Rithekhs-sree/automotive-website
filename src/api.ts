import emailjs from '@emailjs/browser'

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

export async function submitContactForm(
  payload: ContactFormData,
): Promise<ApiResult> {

  const templateParams = {
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    vehicle: payload.vehicle,
    service: payload.service,
    message: payload.message,
  }

  try {
    // Send enquiry email to business
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )

    // Send automatic reply to customer
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )

    return {
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
    }

  } catch (error) {
    console.error('EmailJS error:', error)

    throw new Error(
      'Failed to send message. Please try again later.',
    )
  }
}