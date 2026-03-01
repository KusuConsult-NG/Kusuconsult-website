'use server'

import { Resend } from 'resend'

export async function sendContactEmail(formData: FormData) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
        console.warn('RESEND_API_KEY is not defined. Simulating successful email send for development.')
    }
    const resend = apiKey ? new Resend(apiKey) : null
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    if (!name || !email || !subject || !message) {
        return { success: false, error: 'All fields are required.' }
    }

    try {
        if (!resend) {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log(`[DEV MODE] Simulated sending email to admin@kusuconsult.com. Subj: ${subject}`)
            return { success: true }
        }

        const { data, error } = await resend!.emails.send({
            from: 'KusuConsult Website <noreply@kusuconsult.com>', // Requires verified domain on Resend
            to: ['admin@kusuconsult.com'],
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h2>New Message from KusuConsult Contact Form</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        })

        if (error) {
            console.error('Error sending email:', error)
            return { success: false, error: 'Failed to send message. Please try again later.' }
        }

        return { success: true }
    } catch (error) {
        console.error('Submission error:', error)
        return { success: false, error: 'An unexpected error occurred.' }
    }
}
