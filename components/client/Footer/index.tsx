import Link from "next/link";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <>
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
        <div className={s.feature}>
          <p>AlikahAds</p>
          <div className={s.featuredDescription}>
          Alikah offers free user-to-user classified ads in all major cities in
          the South Africa. You can post an ad at no cost and browse through the
          huge selection of free classifieds on Alikah Ads!
          </div>
        </div>
        <div className={s.feature}>
          <p >Would You Like to Post a Classified Ad?</p>
          <div className={s.featuredDescription}>
          Would You Like to Post a Classified Ad? It’s very easy to post an ad
          on AlikahAds and works just like the ads in the local newspaper. Your
          advantage at AlikahAds is that your ad will reach a much larger
          audience. What makes it even more interesting is that you can upload
          pictures or add a link to your website. To post a free classified ad
          now, simply choose your city or click the link below.
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
