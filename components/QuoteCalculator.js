"use client";
import { useState } from "react";
import styles from "./QuoteCalculator.module.css";

const MATERIALS = [
  { id: "anodised", name: "003 / 005 Anodised Aluminium", desc: "Chemical, UV & high-heat resistant metal plates. For generators, fleet vehicles & plant equipment.", durability: "Highest (15+ Years)" },
  { id: "polyester", name: "3M Polyester 100% Laminated", desc: "Heavy-duty outdoor/indoor film with high scuff resistance. For electronics, appliances & machinery.", durability: "Very High (8-10 Years)" },
  { id: "void", name: "Silver Void Polyester (Tamper-Evident)", desc: "Leaves permanent 'VOID' residue if removed. Perfect for warranty, IT assets & security compliance.", durability: "High Security (5-8 Years)" },
  { id: "polypropylene", name: "Polypropylene Standard Lamination", desc: "Cost-effective, waterproof barcode & QR tracking labels for retail, office furniture & dry stores.", durability: "Medium (3-5 Years)" }
];

const SERVICES = [
  { id: "full", name: "End-to-End Turnkey Audit", desc: "Physical counting + Barcode/RFID Tagging + Register Reconciliation" },
  { id: "tagging", name: "Asset Tagging & Label Production", desc: "Custom printed barcodes/QRs with company logo, affixed on-site" },
  { id: "software", name: "Asset Management Software Integration", desc: "Cloud register deployment, scanner setup & maintenance scheduling" },
  { id: "reorganize", name: "Store & Warehouse Reorganization", desc: "Physical inventory sorting, racking optimization & labeling" },
  { id: "data", name: "Data Entry & Document Archiving", desc: "Digitization of paper invoices, purchase orders & fixed asset schedules" }
];

export default function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState("full");
  const [selectedMaterial, setSelectedMaterial] = useState("anodised");
  const [assetCount, setAssetCount] = useState(500);
  const [branches, setBranches] = useState(1);
  const [tagTechnology, setTagTechnology] = useState("Barcode + QR Code");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const serviceName = SERVICES.find(s => s.id === selectedService)?.name || selectedService;
    const materialName = MATERIALS.find(m => m.id === selectedMaterial)?.name || selectedMaterial;

    // Direct WhatsApp message formatting for instantaneous executive contact
    const waText = `*O.CUBE ASSET AUDIT & QUOTE INQUIRY*
----------------------------------------
*Client:* ${name || "Client"} (${company || "Company"})
*Phone:* ${phone}
*Email:* ${email}

*Project Scope:*
• *Service:* ${serviceName}
• *Estimated Assets:* ${Number(assetCount).toLocaleString()} items
• *Branches / Sites:* ${branches} location(s)
• *Tag Substrate:* ${materialName}
• *Technology:* ${tagTechnology}

*Site Notes:*
${notes || "Please get in touch with our team."}`;

    const waUrl = `https://wa.me/2348055260304?text=${encodeURIComponent(waText)}`;
    
    // Open WhatsApp directly for instant communication
    window.open(waUrl, "_blank");

    // Also trigger email backup
    const emailSubject = `Quote Request: ${company || name || "New Client"} - ${assetCount} Assets`;
    const emailBody = `O.CUBE ASSET MANAGEMENT - QUOTE INQUIRY\n\n${waText}`;
    window.location.href = `mailto:ocubeasset@gmail.com?cc=olawale_olowogoke@yahoo.co.uk&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setSubmitted(true);
  }

  return (
    <section id="quote-calculator" className={styles.section}>
      <div className={`wrap ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.badge}>Interactive Scope & WhatsApp Quote</span>
          <h2 className={styles.title}>Estimate Your Project & Connect With Us Directly</h2>
          <p className={styles.subtitle}>
            Select your service type, estimated asset volume, and label specifications below. Clicking submit connects you directly with our principal team on WhatsApp with your project parameters ready.
          </p>
        </div>

        <form className={styles.calculatorCard} onSubmit={handleSubmit}>
          {/* Step 1: Service Type */}
          <div className={styles.stepBlock}>
            <div className={styles.stepTitle}>
              <span className={styles.stepNum}>1</span>
              <h3>Select Service Scope</h3>
            </div>
            <div className={styles.serviceGrid}>
              {SERVICES.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  className={`${styles.serviceBtn} ${selectedService === s.id ? styles.activeService : ""}`}
                  onClick={() => setSelectedService(s.id)}
                >
                  <span className={styles.radioDot} />
                  <div>
                    <strong>{s.name}</strong>
                    <p>{s.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Asset Volume & Locations */}
          <div className={styles.stepBlock}>
            <div className={styles.stepTitle}>
              <span className={styles.stepNum}>2</span>
              <h3>Asset Volume &amp; Facility Branches</h3>
            </div>
            <div className={styles.sliderGrid}>
              <div className={styles.sliderControl}>
                <div className={styles.sliderHeader}>
                  <label htmlFor="asset-slider">Estimated Number of Physical Assets:</label>
                  <span className={styles.sliderValue}>{Number(assetCount).toLocaleString()} items</span>
                </div>
                <input
                  id="asset-slider"
                  type="range"
                  min="50"
                  max="15000"
                  step="50"
                  value={assetCount}
                  onChange={(e) => setAssetCount(e.target.value)}
                  className={styles.rangeInput}
                />
                <div className={styles.rangeTicks}>
                  <span>50</span>
                  <span>1,000</span>
                  <span>5,000</span>
                  <span>10,000</span>
                  <span>15,000+</span>
                </div>
              </div>

              <div className={styles.sliderControl}>
                <div className={styles.sliderHeader}>
                  <label htmlFor="branch-slider">Operating Locations / Branches:</label>
                  <span className={styles.sliderValue}>{branches} {branches === 1 ? "Site" : "Sites"}</span>
                </div>
                <input
                  id="branch-slider"
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={branches}
                  onChange={(e) => setBranches(e.target.value)}
                  className={styles.rangeInput}
                />
                <div className={styles.rangeTicks}>
                  <span>1 Single Site</span>
                  <span>5 Branches</span>
                  <span>20 Branches</span>
                  <span>50+ Nationwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Tag Material & Tech */}
          <div className={styles.stepBlock}>
            <div className={styles.stepTitle}>
              <span className={styles.stepNum}>3</span>
              <h3>Identification Tag Substrate</h3>
            </div>
            <div className={styles.materialGrid}>
              {MATERIALS.map((m) => (
                <button
                  type="button"
                  key={m.id}
                  className={`${styles.materialBtn} ${selectedMaterial === m.id ? styles.activeMaterial : ""}`}
                  onClick={() => setSelectedMaterial(m.id)}
                >
                  <div className={styles.materialTop}>
                    <strong>{m.name}</strong>
                    <span className={styles.durabilityBadge}>{m.durability}</span>
                  </div>
                  <p>{m.desc}</p>
                </button>
              ))}
            </div>

            <div className={styles.techOptions}>
              <span className={styles.techLabel}>Scanning Technology:</span>
              <div className={styles.techButtons}>
                {["1D Standard Barcode", "Barcode + QR Code", "UHF RFID + Barcode", "Custom Laser Engraved"].map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={`${styles.techBtn} ${tagTechnology === t ? styles.activeTech : ""}`}
                    onClick={() => setTagTechnology(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 4: Contact Information */}
          <div className={styles.stepBlock}>
            <div className={styles.stepTitle}>
              <span className={styles.stepNum}>4</span>
              <h3>Your Contact Information</h3>
            </div>
            <div className={styles.contactFields}>
              <label>
                Full Name *
                <input
                  type="text"
                  required
                  placeholder="e.g. Chinedu Okafor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                Company / Organization Name *
                <input
                  type="text"
                  required
                  placeholder="e.g. Eat 'N' GO, Jumia, Dangote..."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>

              <label>
                Phone Number (WhatsApp) *
                <input
                  type="tel"
                  required
                  placeholder="+234 ..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              <label>
                Corporate Email Address *
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className={styles.fullWidthField}>
                Additional Notes or Specific Instructions:
                <textarea
                  rows="3"
                  placeholder="Describe your asset types (laptops, industrial pumps, cold storage racks, vehicles), current asset register condition, or preferred timelines..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Submission Bar */}
          <div className={styles.submitBar}>
            <div className={styles.summaryDigest}>
              <span>Scope Summary:</span>
              <strong>{Number(assetCount).toLocaleString()} Assets · {branches} Site(s) · {MATERIALS.find(m => m.id === selectedMaterial)?.name.split(' ')[0]} Tag</strong>
            </div>

            <button type="submit" className="btn">
              Direct WhatsApp Quote &amp; Inquiry →
            </button>
          </div>

          {submitted && (
            <div className={styles.successMessage}>
              <span className={styles.checkIcon}>✓</span>
              <div>
                <strong>Inquiry Connected!</strong>
                <p>WhatsApp and your mail application have been opened with your exact project scope. You can also call directly at <strong>+234 805 526 0304</strong> or <strong>+234 808 144 4046</strong>.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
