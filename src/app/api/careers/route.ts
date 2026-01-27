import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const position = formData.get("position") as string;
    const message = formData.get("message") as string;
    const cvFile = formData.get("cv") as File | null;

    // Validate required fields
    if (!fullName || !phone || !email || !position) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Get Gmail credentials from environment variables
    const gmailUser = process.env.GMAIL_USER || "contact@khanshvac.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD || "Skzs052969";

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Prepare CV attachment if provided
    let attachments = [];
    if (cvFile) {
      const buffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(buffer),
      });
    }

    // Email to company
    await transporter.sendMail({
      from: `"Career Application" <${gmailUser}>`,
      to: "contact@khanshvac.com",
      subject: `Career Application - ${position}`,
      html: `
        <h2>New Career Application Received</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Applicant Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><em>Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })}</em></p>
      `,
      attachments: attachments,
    });

    // Confirmation email to applicant
    await transporter.sendMail({
      from: `"Khan's Authentic HVAC Systems" <${gmailUser}>`,
      to: email,
      subject: "Application Received - Khan's Authentic HVAC Systems",
      html: `
        <h2>Thank You for Your Application</h2>
        <p>Dear ${fullName},</p>
        <p>We have received your application for the <strong>${position}</strong> position.</p>
        <p>Our team will review your application and contact you if your qualifications match our requirements.</p>
        <br>
        <p>Best regards,<br>
        <strong>Khan's Authentic HVAC Systems</strong><br>
        HR Department</p>
      `,
    });

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
