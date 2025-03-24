import { NextResponse } from "next/server"
import { Resend } from "resend"

// Inicializa Resend con tu API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json()

    // Validación básica
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Todos los campos obligatorios deben ser completados" }, { status: 400 })
    }

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Actualiza con tu dominio verificado
      to: ["josecalvano1546@gmail.com"],
      subject: `Nuevo contacto de ${firstName} ${lastName}`,
      text: `
        Nombre: ${firstName} ${lastName}
        Email: ${email}
        Teléfono: ${phone || "No proporcionado"}
        
        Mensaje:
        ${message}
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error al enviar email:", error)
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
  }
}

