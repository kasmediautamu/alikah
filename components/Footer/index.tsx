import Link from "next/link";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.feature}>
        <p>Information</p>
        <Link href="/terms-of-use">Terms Of Use</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/Privascy-policy">Privascy Policy</Link>
        <Link href="/help">Help/FAQ</Link>
      </div>
      <div className={s.feature}>
        <p>Features</p>
        <Link href="/promote-ad">Promote Your Ad</Link>
        <Link href="/partner-with-us">Partner With Us</Link>
        <Link href="/login">Create Your Account</Link>
      </div>
      <div className={s.feature}>
        <p>Services</p>
        <Link href="/promote-ad">Safety Tips</Link>
        <Link href="/subscribe">Our Newsletter</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
