import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, location, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !location || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Debug: Check if env variables are loaded
    const gmailUser = process.env.GMAIL_USER || "contact@khanshvac.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD || "Skzs052969";
    
    console.log("GMAIL_USER:", gmailUser);
    console.log("GMAIL_APP_PASSWORD exists:", !!gmailPass);

    // Create email transporter with Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content for the company
    const emailContent = `
New Quote Request from Khan's HVAC Website

Client Information:
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "Not provided"}

Project Details:
----------------
Project Type: ${projectType}
Location: ${location}

Message:
--------
${message}

---
Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })}
    `;

    // Send email to your company
    await transporter.sendMail({
      from: `"Website Lead" <${gmailUser}>`,
      to: "contact@khanshvac.com",
      subject: `New Quote Request from ${name} - ${projectType}`,
      text: emailContent,
      replyTo: email,
    });

    // Send confirmation email to the client
    await transporter.sendMail({
      from: `"Khan's Authentic HVAC Systems" <${gmailUser}>`,
      to: email,
      subject: "Quote Request Received - Khan's Authentic HVAC Systems",
      text: `Dear ${name},

Thank you for your interest in Khan's Authentic HVAC Systems.

We have received your quote request for ${projectType} in ${location}. Our engineering team will review your requirements and contact you within 24 hours.

Project Details Submitted:
- Project Type: ${projectType}
- Location: ${location}
- Contact: ${phone}

If you have any immediate questions, please feel free to reach us at:
Phone: +880 1743833916 / +880 1756785842
Email: contact@khanshvac.com

Best regards,
Khan's Authentic HVAC Systems
Complete Air-Conditioning Solution
Mohammadpur, Dhaka, Bangladesh`,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Quote request submitted successfully. Check your email for confirmation." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
