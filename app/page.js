"use client";
import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import InteractiveCarousel from "@/components/InteractiveCarousel";
import CubeAnimation from "@/components/CubeAnimation";
import MiniCube from "@/components/MiniCube";
import Reveal from "@/components/Reveal";
import IndustriesCarousel from "@/components/IndustriesCarousel";
import FaqSection from "@/components/FaqSection";
import s from "./page.module.css";

// 100% Genuine, Verified Client Tag Production Samples
// (Only real, authentic photos from client projects)
const TAG_ITEMS = [
  {
    src: "/img/tags/dangote-metal-tag.jpg",
    title: "Dangote Sugar Refinery Plc",
    material: "005 Anodised Aluminium Barcode Plate",
    code: "3100000204.66667",
    desc: "Heavy industrial aluminium plate with deep-etched barcode and corporate logo. Resists acid, solvents, and extreme temperatures."
  },
  {
    src: "/img/tags/allied-anodised-003.jpg",
    title: "Allied Restoration (003 Anodised)",
    material: "003 Anodised Aluminium + 2D Datamatrix",
    code: "832.1 (844-9-ALLIED)",
    desc: "High density 2D data-matrix on anodised metal for compact asset labeling and fast optical scanner reading."
  },
  {
    src: "/img/tags/uba-silver-void.jpg",
    title: "United Bank for Africa (UBA)",
    material: "Silver Void Polyester Laminated",
    code: "0166/EMT/FF/1850001/0570",
    desc: "Tamper-evident security label. Leaves indelible 'VOID' adhesive layer on surface if unauthorized removal is attempted."
  },
  {
    src: "/img/tags/green-hills-qr.jpg",
    title: "Green Hills Agricultural Products",
    material: "Polypropylene Standard Lamination",
    code: "GHAP/PMTE/0282-0284",
    desc: "Waterproof synthetic label featuring corporate logo and 2D QR code for agricultural asset registers."
  },
  {
    src: "/img/tags/miller-foods-metal.jpg",
    title: "Miller Foods (RM) Limited",
    material: "Brushed Aluminium Metal Barcode Tag",
    code: "GB105157",
    desc: "Clean-edge metallic finish designed for food processing machinery, stainless steel vessels, and cleanroom facilities."
  },
  {
    src: "/img/tags/lmdgp-silver-void.jpg",
    title: "Lagos Metropolitan Development Project",
    material: "Silver Void Polyester Laminated (LMDGP)",
    code: "LMDGP/MV/0022 - 0024",
    desc: "Official state development governance project tags for public infrastructure and municipal mobile assets."
  },
  {
    src: "/img/tags/nfz-barcode.jpg",
    title: "Property of NFZ Barcode Tag",
    material: "Durable Polyester Asset Label",
    code: "NFZ/FF/00290",
    desc: "High-contrast linear Code 128 barcode label engineered for rapid optical scanning and register reconciliation."
  }
];

// 100% Genuine, Verified Field Work Deployments
// (Real on-site tagging photos on client equipment and machinery)
const FIELD_ITEMS = [
  {
    src: "/img/field/eatngo-motorbike.jpg",
    title: "Commercial Delivery Fleet Motorbikes",
    category: "Fleet & Logistics",
    code: "OPMV1001414",
    desc: "Weatherproof barcode tagging on chassis frame of delivery motorbikes for real-time fleet maintenance and tracking."
  },
  {
    src: "/img/field/caterpillar-generator.jpg",
    title: "Caterpillar Heavy Generator & Control Panel",
    category: "Heavy Plant Equipment",
    code: "DPEQ1000613",
    desc: "Chemical and heat-resistant anodised plate installed on Caterpillar standby power generating plant."
  },
  {
    src: "/img/field/coldroom-racks.jpg",
    title: "Industrial Cold Room Wire Shelving",
    category: "Warehousing & Storage",
    code: "DPKE2001269",
    desc: "Sub-zero adhesive asset tags for industrial cold storage wire racks holding food inventory."
  },
  {
    src: "/img/field/commercial-furniture.jpg",
    title: "Commercial Dining & Facility Tables",
    category: "Corporate Hospitality",
    code: "DFUR1004521",
    desc: "Discrete tamper-proof identification on metal underframes for corporate and restaurant multi-unit branches."
  },
  {
    src: "/img/field/hvac-air-conditioner.jpg",
    title: "Commercial HVAC Air Conditioning Units",
    category: "Facility Management",
    code: "DPAC1000622",
    desc: "Outdoor-grade UV resistant asset tag on commercial split and package air-conditioning units."
  },
  {
    src: "/img/field/dispatch-top-box.jpg",
    title: "Dispatch Delivery Top Boxes",
    category: "Logistics Equipment",
    code: "DPMV1001352",
    desc: "Asset identification on insulated fiberglass motorcycle delivery boxes certified for urban dispatch."
  },
  {
    src: "/img/field/restaurant-high-table.jpg",
    title: "Facility High Tables & Stools",
    category: "Hospitality & Corporate",
    code: "DFUR1004530",
    desc: "Durable barcode labeling applied to steel frame bases for corporate branches."
  }
];

// Documented Core Solutions with High-Quality Illustrative Card Images
const SERVICES_DATA = [
  {
    num: "01",
    image: "/img/service-verification.jpg",
    title: "Fixed Asset Verification",
    badge: "Core Service",
    desc: "Comprehensive physical verification of fixed assets to confirm their existence, location, condition, and custodianship — ensuring the accuracy of asset registers across all facilities.",
    bullets: ["Zero ghost asset tolerance", "Detailed physical condition audit", "Custodianship & branch validation"]
  },
  {
    num: "02",
    image: "/img/service-tagging.jpg",
    title: "Asset Tagging & Identification",
    badge: "Hardware & Labels",
    desc: "Professional asset identification and tagging services using Barcode, QR Code, RFID, and customized asset labels for effective asset tracking and control.",
    bullets: ["003/005 anodised aluminium & 3M polyester", "Serialized 1D barcodes & 2D QR codes", "UHF RFID tag integration"]
  },
  {
    num: "03",
    image: "/img/service-reconciliation.jpg",
    title: "Asset Reconciliation",
    badge: "Financial Integrity",
    desc: "Detailed reconciliation of physical assets against existing asset registers to identify discrepancies, eliminate ghost assets, and improve data integrity for statutory audit readiness.",
    bullets: ["Variance analysis & reporting", "General ledger line-by-line alignment", "Statutory audit readiness"]
  },
  {
    num: "04",
    image: "/img/service-software.jpg",
    title: "Asset Management Software",
    badge: "Software Platform",
    desc: "Implementation and support of advanced asset management software that enables real-time asset tracking, reporting, maintenance scheduling, lifecycle management, and audit readiness.",
    bullets: ["Real-time asset movement tracking", "Depreciation & lifecycle logs", "Instant audit-ready export"]
  },
  {
    num: "05",
    image: "/img/service-warehouse.jpg",
    title: "Store & Warehouse Reorganization",
    badge: "Operations",
    desc: "Transform congested, inefficient storerooms into structured, logical environments. We sort stock, implement bin/shelf labeling, categorize parts, and eliminate slow-moving bottlenecks.",
    bullets: ["Shelving & bin identification", "Layout flow optimization", "Obsolete stock segregation"]
  },
  {
    num: "06",
    image: "/img/service-data-entry.jpg",
    title: "Data Entry & Records Digitization",
    badge: "Records",
    desc: "Rapid conversion of manual ledgers, paper delivery notes, equipment invoices, and scattered spreadsheets into clean, normalized digital databases with strict quality controls.",
    bullets: ["High-speed accurate data capture", "Database cleansing & normalization", "Secure confidential processing"]
  },
  {
    num: "07",
    image: "/img/service-archiving.jpg",
    title: "Document Archiving (EDMS)",
    badge: "Compliance",
    desc: "Professional scanning, metadata indexing, and structured electronic document management archiving of asset procurement files, deeds, warranty certificates, and maintenance history.",
    bullets: ["Indexed electronic document archive", "Fast keyword file retrieval", "Audit compliance retention"]
  }
];

export default function Home() {
  return (
    <>
      {/* 1. Dynamic Full-Bleed Hero Slideshow with Crisp Architectural Background */}
      <HeroSlideshow />

      {/* 2. Client Trust Strip with CAC Credentials */}
      <section className={s.trustBar}>
        <div className={`wrap ${s.trustGrid}`}>
          <Reveal variant="fadeUp" delay={0}>
            <div className={s.trustItem}>
              <span className={s.trustPill}>CAC REGISTRATION</span>
              <strong>RC 1247860</strong>
              <small>Incorporated 11th March, 2015</small>
            </div>
          </Reveal>
          <Reveal variant="fadeUp" delay={80}>
            <div className={s.trustItem}>
              <span className={s.trustPill}>TRACK RECORD</span>
              <strong>100,000+ Assets</strong>
              <small>Verified, Tagged & Reconciled</small>
            </div>
          </Reveal>
          <Reveal variant="fadeUp" delay={160}>
            <div className={s.trustItem}>
              <span className={s.trustPill}>ACCURACY RATE</span>
              <strong>99.98%</strong>
              <small>Zero Ghost Asset Variance</small>
            </div>
          </Reveal>
          <Reveal variant="fadeUp" delay={240}>
            <div className={s.trustItem}>
              <span className={s.trustPill}>COVERAGE</span>
              <strong>Nationwide Nigeria</strong>
              <small>Lagos, Abuja, Port Harcourt & Beyond</small>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Company About Us, Mission, Vision & Why Choose Us (Aligned with MiniCube) */}
      <section id="about" className={s.aboutMissionSection}>
        <div className="wrap">
          <Reveal variant="fadeUp">
            <div className={s.secHeaderCenter}>
              <span className={s.subBadge}>
                <MiniCube size={18} />
                About O.CUBE Asset Management
              </span>
              <h2>Who We Are & What We Stand For</h2>
              <p className={s.leadText}>
                <strong>O. Cube Asset Management Limited</strong> is a professional asset management services company specializing in <strong>Fixed Asset Verification</strong>, <strong>Asset Tagging</strong>, <strong>Asset Reconciliation</strong>, and <strong>Asset Management Software Solutions</strong>. We help organizations establish accurate asset records, improve accountability, and maximize the value of their investments through technology-driven asset management practices.
              </p>
              <p className={s.subLeadText}>
                Our team provides end-to-end asset management services that enable businesses, government institutions, educational organizations, healthcare providers, and corporate entities to maintain complete visibility and control over their fixed assets. By combining proven verification methodologies with modern asset management software, we deliver reliable, accurate, and sustainable asset management solutions.
              </p>
            </div>
          </Reveal>

          {/* Mission, Vision & Core Values Grid */}
          <div className={s.missionVisionGrid}>
            <Reveal variant="slideLeft" delay={50}>
              <div className={s.mvCard}>
                <div className={s.cardHeaderWithNumber}>
                  <span className={s.cardNumber}>01</span>
                  <span className={s.mvIcon}>🎯</span>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide innovative and reliable asset management solutions that enhance accountability, improve operational efficiency, and support informed business decision-making.
                </p>
              </div>
            </Reveal>

            <Reveal variant="popIn" delay={120}>
              <div className={s.mvCard}>
                <div className={s.cardHeaderWithNumber}>
                  <span className={s.cardNumber}>02</span>
                  <span className={s.mvIcon}>🔭</span>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a leading provider of fixed asset management solutions in Africa, recognized for excellence, integrity, and innovation.
                </p>
              </div>
            </Reveal>

            <Reveal variant="slideRight" delay={190}>
              <div className={s.mvCard}>
                <div className={s.cardHeaderWithNumber}>
                  <span className={s.cardNumber}>03</span>
                  <span className={s.mvIcon}>💎</span>
                </div>
                <h3>Our Core Values</h3>
                <ul className={s.coreValuesList}>
                  <li><strong>Integrity:</strong> Uncompromising accuracy and zero tolerance for phantom or unrecorded assets.</li>
                  <li><strong>Excellence:</strong> Industrial-grade materials (005 anodised aluminium &amp; 3M) engineered for longevity.</li>
                  <li><strong>Accountability:</strong> Complete physical-to-ledger reconciliation with audit trails.</li>
                  <li><strong>Innovation:</strong> Seamless integration of QR, RFID, and cloud asset software.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Why Choose Us Grid */}
          <Reveal variant="fadeUp" delay={250}>
            <div className={s.whyChooseUsBox}>
              <div className={s.whyHeader}>
                <span className={s.subBadge}>
                  <MiniCube size={18} />
                  Our Competitive Edge
                </span>
                <h3>Why Choose O. Cube Asset Management?</h3>
              </div>
              <div className={s.whyGrid}>
                <div className={s.whyItem}>
                  <span className={s.whyCheck}>✓</span>
                  <span>Accurate and reliable asset verification services</span>
                </div>
                <div className={s.whyItem}>
                  <span className={s.whyCheck}>✓</span>
                  <span>Professional asset tagging and identification solutions</span>
                </div>
                <div className={s.whyItem}>
                  <span className={s.whyCheck}>✓</span>
                  <span>Seamless asset register reconciliation (Zero Ghost Assets)</span>
                </div>
                <div className={s.whyItem}>
                  <span className={s.whyCheck}>✓</span>
                  <span>Technology-driven asset management systems</span>
                </div>
                <div className={s.whyItem}>
                  <span className={s.whyCheck}>✓</span>
                  <span>Improved compliance and external audit readiness</span>
                </div>
                <div className={s.whyItem}>
                  <span className={s.whyCheck}>✓</span>
                  <span>Enhanced asset visibility and total executive control</span>
                </div>
                <div className={s.whyItem}>
                  <span className={s.whyCheck}>✓</span>
                  <span>Experienced and dedicated field professionals</span>
                </div>
                <div className={s.whyItem}>
                  <span className={s.whyCheck}>✓</span>
                  <span>Customized solutions tailored to client needs</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Professional 3D Geometric Brand Section */}
      <section id="interactive-cube" className={s.cubeFeatureSection}>
        <div className={`wrap ${s.cubeFeatureGrid}`}>
          <Reveal variant="slideLeft">
            <div className={s.cubeFeatureCopy}>
              <span className={s.subBadge}>
                <MiniCube size={18} />
                The O.CUBE Architecture
              </span>
              <h2>Total Visibility. Engineered Geometry. Full Accountability.</h2>
              <p className={s.leadText}>
                Just as each face of a cube locks into geometric precision, our asset management framework connects physical field counts, durable barcode/RFID tagging, and software registers into one seamless source of truth.
              </p>
              <ul className={s.featureChecklist}>
                <li><strong>Industrial Materials:</strong> 005 aluminium plates, 3M polyester, and silver tamper-void substrates that never peel.</li>
                <li><strong>Audit Assurance:</strong> Comprehensive line-by-line reconciliation resolving general ledger discrepancies.</li>
                <li><strong>Connected Systems:</strong> Barcode, QR, and RFID scanning linked directly into our cloud asset platform.</li>
              </ul>
              <div className={s.cubeCtas}>
                <a 
                  href="https://wa.me/2348055260304?text=Hello%20O.CUBE,%20I%20would%20like%20to%20request%20an%20asset%20audit%20proposal." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                >
                  Request Project Proposal ↗
                </a>
                <a href="/OCube-Company-Profile.pdf" download className="btn ghost">Download Profile PDF</a>
              </div>
            </div>
          </Reveal>

          <Reveal variant="slideRight" delay={100}>
            <div className={s.cubeFeatureVisual}>
              <div className={s.cubeDisplayPlate}>
                <CubeAnimation size={200} />
                <div className={s.cubeStatsMini}>
                  <div><strong>005</strong><small>Anodised</small></div>
                  <div><strong>3M</strong><small>Laminate</small></div>
                  <div><strong>UHF</strong><small>RFID</small></div>
                  <div><strong>100%</strong><small>Audit Ready</small></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Core Services Grid with High-Quality Card Photos & Clean Typography */}
      <section id="services" className={s.servicesSection}>
        <div className="wrap">
          <Reveal variant="fadeUp">
            <div className={s.secHeaderCenter}>
              <span className={s.subBadge}>
                <MiniCube size={18} />
                Our Core Services
              </span>
              <h2>End-to-End Asset Management Solutions</h2>
              <p className={s.leadText}>
                End-to-end asset management, from the first physical count to a live, audit-ready asset register.
              </p>
            </div>
          </Reveal>

          <div className={s.serviceCards}>
            {SERVICES_DATA.map((srv, idx) => (
              <Reveal 
                key={srv.num} 
                variant={idx % 2 === 0 ? "fadeUp" : "popIn"} 
                delay={(idx % 3) * 80}
              >
                <article className={s.serviceCard}>
                  <div className={s.cardImgContainer}>
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className={s.cardImg}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className={s.cardCornerNum}>{srv.num}</span>
                  </div>
                  <div className={s.cardBody}>
                    <div className={s.cardTop}>
                      <span className={s.serviceBadge}>{srv.badge}</span>
                    </div>
                    <h3>{srv.title}</h3>
                    <p className={s.serviceDesc}>{srv.desc}</p>
                    <ul className={s.serviceBullets}>
                      {srv.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <a 
                      href={`https://wa.me/2348055260304?text=Hello%20O.CUBE,%20I%20would%20like%20to%20inquire%20about%20your%20service:%20${encodeURIComponent(srv.title)}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={s.serviceLink}
                    >
                      Inquire for this service ↗
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Tag Materials & Client Production Samples (Placed first) */}
      <section id="tags" className={s.tagSection}>
        <div className="wrap">
          <Reveal variant="fadeUp">
            <div className={s.secHeaderCenter}>
              <span className={s.subBadge}>
                <MiniCube size={18} />
                Industrial Substrates
              </span>
              <h2>Barcode, QR &amp; RFID Tags Built for Durability</h2>
              <p className={s.leadText}>
                We supply and affix custom-manufactured tags featuring your corporate branding, 1D/2D barcodes, and sequential serial numbers. Hover over or click any sample to inspect.
              </p>
            </div>
          </Reveal>

          <InteractiveCarousel
            subtitle="Client Production Samples"
            title="Explore Our Label Substrates & Barcode Plates"
            items={TAG_ITEMS}
            isTagGallery={true}
          />
        </div>
      </section>

      {/* 7. Live Field Tagging Deployments Carousel */}
      <section id="deployments" className={s.deploySection}>
        <div className="wrap">
          <Reveal variant="fadeUp">
            <div className={s.secHeaderCenter}>
              <span className={s.subBadge}>
                <MiniCube size={18} />
                Proven Field Performance
              </span>
              <h2>Verified Field Deployments Across Nigeria</h2>
              <p className={s.leadText}>
                See our permanent industrial asset tags deployed on active heavy machinery, commercial delivery fleets, and corporate facilities.
              </p>
            </div>
          </Reveal>

          <InteractiveCarousel
            subtitle="Active Client Sites"
            title="Real-World Equipment & Tag Deployments"
            items={FIELD_ITEMS}
            isTagGallery={false}
          />
        </div>
      </section>

      {/* 8. 4-Step End-to-End Methodology */}
      <section id="process" className={s.processSection}>
        <div className="wrap">
          <Reveal variant="fadeUp">
            <div className={s.secHeaderCenter}>
              <span className={s.subBadge}>
                <MiniCube size={18} />
                Seamless Execution
              </span>
              <h2>How We Work: The 4-Step Approach</h2>
              <p className={s.leadText}>
                Our systematic 4-phase audit cycle ensures minimal disruption to your daily operations while delivering comprehensive control.
              </p>
            </div>
          </Reveal>

          <div className={s.processSteps}>
            <Reveal variant="fadeUp" delay={0}>
              <div className={s.processStep}>
                <div className={s.stepTopHeader}>
                  <span className={s.stepNumberLarge}>01</span>
                  <span className={s.stepPill}>Phase 01</span>
                </div>
                <h3>Physical Verification</h3>
                <p>Our experienced field engineers visit all company branches, warehouses, and remote facilities to physically verify every item&apos;s condition, make, model, serial, and designated custodian.</p>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={80}>
              <div className={s.processStep}>
                <div className={s.stepTopHeader}>
                  <span className={s.stepNumberLarge}>02</span>
                  <span className={s.stepPill}>Phase 02</span>
                </div>
                <h3>Barcode &amp; RFID Tagging</h3>
                <p>Every asset is cleaned, degreased, and permanently affixed with high-tack serialized barcode, QR, or RFID tags matching your required environmental durability tier.</p>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={160}>
              <div className={s.processStep}>
                <div className={s.stepTopHeader}>
                  <span className={s.stepNumberLarge}>03</span>
                  <span className={s.stepPill}>Phase 03</span>
                </div>
                <h3>Reconciliation &amp; Clean-Up</h3>
                <p>We match physical inventory data line-by-line against your accounting fixed asset register. Discrepancies, stolen items, obsolescence, and ghost assets are isolated and resolved.</p>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={240}>
              <div className={s.processStep}>
                <div className={s.stepTopHeader}>
                  <span className={s.stepNumberLarge}>04</span>
                  <span className={s.stepPill}>Phase 04</span>
                </div>
                <h3>Software Governance</h3>
                <p>Your newly verified register is uploaded into our scalable asset management software for real-time tracking, barcode audits, depreciation tracking, and automated maintenance schedules.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Target Industries Carousel */}
      <section id="industries" className={s.industriesSection}>
        <div className="wrap">
          <Reveal variant="fadeUp">
            <div className={s.secHeaderCenter}>
              <span className={s.subBadge}>
                <MiniCube size={18} />
                Industries We Serve
              </span>
              <h2>Sector-Specific Asset Solutions Across Nigeria</h2>
              <p className={s.leadText}>
                Wherever capital fixed assets drive operations and profitability, O.CUBE brings precision, audit assurance, and loss prevention.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={80}>
            <IndustriesCarousel />
          </Reveal>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (FAQ) Section */}
      <FaqSection />

      {/* 11. Clean Direct Executive Inquiry Banner (Replaced the complex calculator with a clean consultation invitation) */}
      <section id="inquiry" className={s.directInquirySection}>
        <div className="wrap">
          <Reveal variant="fadeUp">
            <div className={s.directInquiryCard}>
              <div className={s.inquiryCopy}>
                <span className={s.subBadge}>
                  <MiniCube size={18} />
                  Direct Consultation
                </span>
                <h2>Request a Fixed Asset Audit or Material Proposal</h2>
                <p className={s.leadText}>
                  Connect directly with our principal field directors on WhatsApp or telephone to discuss your organization&apos;s asset verification, durable tagging, or software requirements.
                </p>
                <div className={s.inquiryContactInfo}>
                  <div>📍 <strong>Address:</strong> Plot 19, Suite 56, LSDPC Housing Estate, Isolo, Lagos State, Nigeria</div>
                  <div>📞 <strong>Phone:</strong> +234 805 526 0304 | +234 808 144 4046</div>
                  <div>✉️ <strong>Email:</strong> ocubeasset@gmail.com</div>
                </div>
              </div>
              <div className={s.inquiryActions}>
                <a
                  href="https://wa.me/2348055260304?text=Hello%20O.CUBE%20Asset%20Management,%20I%20would%20like%20to%20request%20an%20asset%20audit%20and%20enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${s.inquiryWhatsAppBtn}`}
                >
                  Chat with Our Team on WhatsApp ↗
                </a>
                <Link href="/contact" className={`btn ghost ${s.inquiryContactPageBtn}`}>
                  Open Contact Page
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
