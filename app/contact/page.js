import EnquiryForm from "@/components/EnquiryForm";
import MiniCube from "@/components/MiniCube";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us & Project Enquiry | O. Cube Asset Management Limited",
  description: "Request an asset verification, barcode/RFID tagging, or reconciliation proposal. Contact our team in Lagos, Nigeria.",
};

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.container}`}>
        <div className={styles.infoCol}>
          <span className={styles.badge}>
            <MiniCube size={16} />
            Get In Touch
          </span>
          <h1>Let&apos;s Account for Every Asset You Own.</h1>
          <p className={styles.lead}>
            Whether you have 100 items at a single location or 50,000+ distributed across nationwide branches, O.CUBE provides the expertise, materials, and technology for total asset control.
          </p>

          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <strong>Head Office Address</strong>
                <p>Plot 19, Suite 56, LSDPC Housing Estate,<br />Isolo, Lagos State, Nigeria</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <strong>Direct Phone Lines</strong>
                <p>
                  <a href="tel:+2348055260304">+234 805 526 0304</a> (Voice / WhatsApp)<br />
                  <a href="tel:+2348081444046">+234 808 144 4046</a>
                </p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <strong>Official Email Accounts</strong>
                <p>
                  <a href="mailto:ocubeasset@gmail.com">ocubeasset@gmail.com</a><br />
                  <a href="mailto:olawale_olowogoke@yahoo.co.uk">olawale_olowogoke@yahoo.co.uk</a>
                </p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.icon}>📜</span>
              <div>
                <strong>Corporate Registration</strong>
                <p>
                  Corporate Affairs Commission (CAC) Nigeria<br />
                  Registration Number: <strong>RC 1247860</strong> (Inc. March 2015)
                </p>
              </div>
            </div>
          </div>

          <div className={styles.downloadCard}>
            <h4>Official Company Profile</h4>
            <p>Download our complete capability statement, client references, and methodology guide (PDF).</p>
            <a href="/OCube-Company-Profile.pdf" download className="btn ghost">
              Download Profile PDF (4.4 MB) ↗
            </a>
          </div>
        </div>

        <div className={styles.formCol}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2>Send an Enquiry</h2>
              <p>Fill out the form below and our principal consultant will respond within 24 hours.</p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
