"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import styles from "./FaqSection.module.css";

const FAQS = [
  {
    q: "What is Fixed Asset Verification and why is it essential?",
    a: "Fixed Asset Verification is the thorough on-site physical inspection and count of all plant, equipment, furniture, vehicles, and IT infrastructure. It ensures every item recorded on your balance sheet genuinely exists, confirms its operational physical condition, pinpoints its GPS location/branch, and assigns accountable custodianship to prevent corporate loss and audit penalties."
  },
  {
    q: "How does O.CUBE resolve 'Ghost Assets' during register reconciliation?",
    a: "A ghost asset is an asset appearing on your financial books that cannot be physically found (often due to unrecorded scrapping, theft, relocation, or trade-in). We perform line-by-line reconciliation comparing our physical audit data against your accounting fixed asset register (FAR), generating discrepancy reports and write-off schedules so your balance sheet reflects 100% genuine assets."
  },
  {
    q: "What types of asset tag materials and substrates do you provide?",
    a: "We manufacture and affix custom tags engineered for specific environments: 005 and 003 anodised aluminium plates for heavy industrial machinery and high temperatures; 3M laminated polyester with acrylic adhesive for IT hardware and appliances; and silver tamper-evident 'VOID' labels that leave an indelible security mark if removal is attempted."
  },
  {
    q: "Can O.CUBE tags integrate Barcode, QR Code, and RFID technologies?",
    a: "Yes. All tags can be custom printed with sequential linear 1D barcodes (Code 128), 2D QR codes, or embedded UHF RFID inlays, together with your company name and full-color corporate logo for rapid handheld optical or radio frequency scanning."
  },
  {
    q: "Do you provide asset management software, data entry, and document archiving?",
    a: "Absolutely. In addition to physical verification, we deploy and support cloud-based asset management software with depreciation tracking, mobile scanner check-in/out, preventative maintenance logs, manual record digitization, and electronic document management systems (EDMS) for procurement invoices and warranty deeds."
  },
  {
    q: "Which sectors and geographic locations across Nigeria do you cover?",
    a: "O.CUBE Asset Management Limited (RC 1247860) operates nationwide across Nigeria—including Lagos, Abuja, Port Harcourt, Kano, and regional industrial hubs. We serve Government Agencies, Financial Institutions, Manufacturing & FMCG, Logistics & Fleets, Healthcare Providers, Educational Institutions, Telecommunications, and NGOs."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="wrap">
        <Reveal variant="fadeUp">
          <div className={styles.secHeaderCenter}>
            <span className={styles.subBadge}>Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p className={styles.leadText}>
              Everything you need to know about our physical verification, durable tagging substrates, register reconciliation, and software solutions.
            </p>
          </div>
        </Reveal>

        <div className={styles.faqList}>
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} variant="fadeUp" delay={idx * 60}>
                <div className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}>
                  <button
                    type="button"
                    className={styles.faqQuestionBtn}
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqIndex}>0{idx + 1}</span>
                    <span className={styles.faqQuestionText}>{item.q}</span>
                    <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconRotated : ""}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerVisible : ""}`}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout for quick inquiry */}
        <Reveal variant="popIn" delay={200}>
          <div className={styles.faqBottomCallout}>
            <div>
              <h3>Have a specific project or need a custom audit proposal?</h3>
              <p>Our asset verification specialists are ready to discuss your facility scope and provide tailored guidance.</p>
            </div>
            <a
              href="https://wa.me/2348055260304?text=Hello%20O.CUBE,%20I%20have%20a%20question%20about%20your%20asset%20verification%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Chat Directly on WhatsApp ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

