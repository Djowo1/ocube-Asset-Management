"use client";
import { useState } from "react";
import s from "./EnquiryForm.module.css";

const PRIMARY_EMAIL = "ocubeasset@gmail.com";
const CC_EMAIL = "olawale_olowogoke@yahoo.co.uk";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    const subject = `Quote Request: ${d.company || d.name} - ${d.service}`;
    const body = `O.CUBE ASSET MANAGEMENT - WEBSITE ENQUIRY

Client Details:
---------------
Full Name: ${d.name}
Company Name: ${d.company || "N/A"}
Phone Number: ${d.phone}
Email: ${d.email}

Requested Service:
------------------
${d.service}

Asset Tag Material Preference:
------------------------------
${d.material || "To be recommended by O.CUBE"}

Asset Description & Scope:
--------------------------
${d.message || "Please contact client for scope details."}`;

    window.location.href = `mailto:${PRIMARY_EMAIL}?cc=${CC_EMAIL}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className={s.f} onSubmit={submit}>
      <label>
        Full Name *
        <input name="name" required autoComplete="name" placeholder="e.g. John Doe" />
      </label>

      <label>
        Company / Organization *
        <input name="company" required autoComplete="organization" placeholder="e.g. ABC Ltd." />
      </label>

      <label>
        Phone Number (WhatsApp) *
        <input name="phone" type="tel" required autoComplete="tel" placeholder="+234 ..." />
      </label>

      <label>
        Email Address *
        <input name="email" type="email" required autoComplete="email" placeholder="name@company.com" />
      </label>

      <label className={s.w}>
        Service Needed
        <select name="service">
          <option>Fixed Asset Verification & Reconciliation</option>
          <option>Barcode & RFID Asset Tagging</option>
          <option>Asset Management Software Solution</option>
          <option>Store & Warehouse Reorganization</option>
          <option>Data Entry & Digitization</option>
          <option>Document Management & Archiving</option>
        </select>
      </label>

      <label className={s.w}>
        Preferred Asset Tag Material
        <select name="material">
          <option>003 / 005 Anodised Aluminium (Heavy Duty Industrial)</option>
          <option>3M Polyester 100% Laminated (Commercial & IT)</option>
          <option>Silver Void Polyester (Tamper-Evident Security)</option>
          <option>Polypropylene Standard Lamination (Dry Stores)</option>
          <option>Recommend the best material for our site</option>
        </select>
      </label>

      <label className={s.w}>
        Asset Details & Project Scope
        <textarea
          name="message"
          rows="4"
          placeholder="Approximate number of assets, locations/branches, equipment types (generators, PCs, cold rooms, fleet bikes)..."
        />
      </label>

      <button className="btn" type="submit">Submit Enquiry Request →</button>

      {sent && (
        <div role="status" className={s.ok}>
          <strong>Thank you!</strong>
          <p>Your email client has been prepared with your inquiry details addressed to <code>{PRIMARY_EMAIL}</code> and our leadership team. You may also call us directly at <strong>+234 805 526 0304</strong>.</p>
        </div>
      )}
    </form>
  );
}
