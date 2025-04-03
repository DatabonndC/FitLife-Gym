export async function sendOrderConfirmation(email: string, data: { plan: string; amount: string }) {
  // In a real application, you would use a service like SendGrid, Mailgun, or Nodemailer
  // to send the email. This is a placeholder.
  console.log(`Sending order confirmation email to ${email} for ${data.plan} plan ($${data.amount}/month)`)
  return Promise.resolve()
}

