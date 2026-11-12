"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Asset Tags", href: "/#tags" },
  { label: "Field Deployments", href: "/#deployments" },
  { label: "How We Work", href: "/#process" },
  { label: "Industries", href: "/#industries" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for frosted glass styling
      setScrolled(currentScrollY > 20);

      // Smart hide-on-scroll-down, show-on-scroll-up behavior
      if (currentScrollY <= 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down -> hide navbar
        setVisible(false);
        setOpen(false); // Close mobile drawer if open
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> reveal navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`${styles.headerShell} ${scrolled ? styles.scrolled : ""} ${visible ? styles.navVisible : styles.navHidden}`}
    >
      <div className={`wrap ${styles.navWrapper}`}>
        <nav className={styles.pillBar} aria-label="Main Navigation">
          {/* Animated Logo (Boxes = O, Word = CUBE) */}
          <Link href="/" aria-label="CUBE Asset Management" className={styles.logoAnchor}>
            <Logo height={36} />
          </Link>

          {/* Clean high-impact desktop navigation links */}
          <div className={styles.centerLinks}>
            {LINKS.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Controls: Compact Theme Toggle + Contact CTA + Hamburger */}
          <div className={styles.rightActions}>
            <ThemeToggle />
            <Link href="/contact" className={`btn ${styles.quotePill}`}>
              Contact Us ↗
            </Link>
            <button
              className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
              aria-label="Toggle navigation menu"
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>

        {/* Responsive Mobile Drawer Menu */}
        {open && (
          <div className={styles.mobileDrawer} onClick={() => setOpen(false)}>
            <div className={styles.mobileLinksList} onClick={(e) => e.stopPropagation()}>
              {LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span className={styles.mobileArrow}>↗</span>
                </Link>
              ))}
              <div className={styles.mobileBottom}>
                <a 
                  href="https://wa.me/2348055260304?text=Hello%20O.CUBE%20Asset%20Management,%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`btn ${styles.mobileCtaBtn}`}
                  onClick={() => setOpen(false)}
                >
                  Contact Us on WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
