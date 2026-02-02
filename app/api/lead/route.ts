import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business, message } = body

    // Here you would typically send to your CRM, email service, etc.
    // For now, we'll just log it and return success
    console.log("New lead:", { name, email, business, message })

    // You could integrate with services like:
    // - Resend for email notifications
    // - Airtable for lead storage
    // - Slack for team notifications

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing lead:", error)
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 })
  }
}
