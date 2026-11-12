import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Wave / Divider */}
      <div className={styles.topBar}>
        <div className={`wrap ${styles.topBarInner}`}>
          <div className={styles.brandBadge}>
            <Logo variant="official" height={48} />
            <p className={styles.tagline}>
              Asset Verification, Tagging & Reconciliation Specialists.
              <br />
              <span className={styles.cacNum}>Incorporated in Nigeria · RC 1247860</span>
            </p>
          </div>

          <div className={styles.quickActions}>
            <a href="/OCube-Company-Profile.pdf" download className="btn ghost">
              Download Profile PDF (4.4MB)
            </a>
            <Link href="/contact" className="btn">
              Get an Instant Quote
            </Link>
          </div>
        </div>
      </div>

      <div className={`wrap ${styles.mainFooter}`}>
        <div className={styles.footerCol}>
          <h4>Core Solutions</h4>
          <ul className={styles.linkList}>
            <li><Link href="/#services">Fixed Asset Verification</Link></li>
            <li><Link href="/#tags">Barcode, QR & RFID Tagging</Link></li>
            <li><Link href="/#services">Asset Register Reconciliation</Link></li>
            <li><Link href="/#services">Asset Management Software</Link></li>
            <li><Link href="/#services">Store & Warehouse Reorganization</Link></li>
            <li><Link href="/#services">Data Entry & Records Archiving</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Industries Served</h4>
          <ul className={styles.linkList}>
            <li><span>Government & Public Agencies</span></li>
            <li><span>Financial Institutions & Banks</span></li>
            <li><span>FMCG, Food & Retail Operations</span></li>
            <li><span>Healthcare & University Campuses</span></li>
            <li><span>Logistics, Delivery & Motorcycle Fleets</span></li>
            <li><span>Heavy Plants & Manufacturing</span></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Asset Tag Substrates</h4>
          <ul className={styles.linkList}>
            <li><span>003 / 005 Anodised Aluminium</span></li>
            <li><span>3M 100% Laminated Polyester</span></li>
            <li><span>Silver Void Tamper-Evident</span></li>
            <li><span>Polypropylene Standard Lamination</span></li>
            <li><span>Custom Laser Engraved Metal Plates</span></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Headquarters & Contact</h4>
          <address className={styles.addressBox}>
            <p className={styles.location}>
              <strong>Corporate Address:</strong>
              <br />
              Plot 19, Suite 56, LSDPC Housing Estate,
              <br />
              Isolo, Lagos State, Nigeria
            </p>
            <p className={styles.phones}>
              <strong>Direct Phone Lines:</strong>
              <br />
              <a href="tel:+2348055260304">+234 805 526 0304</a>
              <br />
              <a href="tel:+2348081444046">+234 808 144 4046</a>
            </p>
            <p className={styles.emails}>
              <strong>Email Inquiries:</strong>
              <br />
              <a href="mailto:ocubeasset@gmail.com">ocubeasset@gmail.com</a>
              <br />
              <a href="mailto:olawale_olowogoke@yahoo.co.uk">olawale_olowogoke@yahoo.co.uk</a>
            </p>
          </address>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`wrap ${styles.bottomInner}`}>
          <p>© {currentYear} O. Cube Asset Management Limited. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <span>Domain: ocubeasset.com</span>
            <span>RC 1247860</span>
            <a href="/CAC-Certificate-OCube.pdf" target="_blank" rel="noopener noreferrer">CAC Certificate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
