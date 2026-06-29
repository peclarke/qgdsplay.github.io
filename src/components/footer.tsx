import Alert from "@mui/material/Alert";
import "@qld-gov-au/qgds-web-components";

const Footer = () => {
  return (
    <section className="valign">
      <Alert variant="filled" severity="error">
        Footer isn't exported from QGDS web components. Links don't look, styles
        look weird. And yet, theirs works.
      </Alert>

      <h3>Footer</h3>

      <qgds-footer
        aoc-heading="Acknowledgement of Country"
        contact-heading="Contact us"
        contact-statement="Get in touch for enquiries, feedback, complaints and compliments."
        copyright-label="© The State of Queensland 2026"
        custom-links-heading="About us"
        footer-heading="Queensland Government"
        heading-level="2"
        palette="bold"
        social-heading="Follow us"
      >
        <qgds-footer-contact-item
          icon-id="phone"
          label="Phone"
          href="tel:137468"
          value="13 QGOV (13 74 68)"
        ></qgds-footer-contact-item>
        <qgds-footer-contact-item
          icon-id="email"
          label="Email"
          href="mailto:email@qld.gov.au"
          value="email@qld.gov.au"
        ></qgds-footer-contact-item>
        <qgds-footer-contact-item
          icon-id="facebook"
          href="https://www.facebook.com/QueenslandGovernment"
          value="/QueenslandGovernment"
        ></qgds-footer-contact-item>

        <qgds-button
          href="https://qld.gov.au/contact"
          slot="contact-cta"
          label="Contact us"
          variant="secondary"
          target="_blank"
        ></qgds-button>

        <qgds-link
          slot="footer-site-link"
          href="https://www.qld.gov.au/help"
          label="Help"
        ></qgds-link>
        <qgds-link
          slot="footer-site-link"
          href="https://www.qld.gov.au/legal/copyright"
          label="Copyright"
        ></qgds-link>
        <qgds-link
          slot="footer-site-link"
          href="https://www.qld.gov.au/legal/disclaimer"
          label="Disclaimer"
        ></qgds-link>
        <qgds-link
          slot="footer-site-link"
          href="https://www.qld.gov.au/legal/privacy"
          label="Privacy"
        ></qgds-link>
        <qgds-link
          slot="footer-site-link"
          href="https://www.qld.gov.au/about/rights-accountability/right-to-information"
          label="Right to information"
        ></qgds-link>
        <qgds-link
          slot="footer-site-link"
          href="https://www.qld.gov.au/help/accessibility"
          label="Accessibility"
        ></qgds-link>
        <qgds-link
          slot="footer-site-link"
          href="https://smartjobs.qld.gov.au/"
          label="Jobs in Queensland Government"
        ></qgds-link>
        <qgds-link
          slot="footer-site-link"
          href="https://www.qld.gov.au/help/languages"
          label="Other languages"
        ></qgds-link>

        <qgds-link
          slot="footer-social-link"
          href="https://www.facebook.com/QueenslandGovernment"
          icon-name="facebook"
          label="Facebook"
        ></qgds-link>
        <qgds-link
          slot="footer-social-link"
          href="https://www.linkedin.com/company/queensland-government"
          icon-name="linkedin"
          label="LinkedIn"
        ></qgds-link>
        <qgds-link
          slot="footer-social-link"
          href="https://twitter.com/qldgov"
          icon-name="x"
          label="X page"
        ></qgds-link>
        <qgds-link
          slot="footer-social-link"
          href="https://www.youtube.com/user/QueenslandGovt"
          icon-name="youtube"
          label="Youtube"
        ></qgds-link>
        <qgds-link
          slot="footer-social-link"
          href="https://www.instagram.com/Queensland/"
          icon-name="instagram"
          label="Instagram"
        ></qgds-link>

        <div slot="aoc">
          <p>
            We pay our respects to the Aboriginal and Torres Strait Islander
            ancestors of this land, their spirits and their legacy. The
            foundations laid by these ancestors — our First Nations peoples —
            give strength, inspiration and courage to current and future
            generations towards creating a better Queensland.
          </p>
        </div>

        <qgds-link
          slot="site-main-link"
          href="https://www.qld.gov.au/"
          label="Queensland Government"
        ></qgds-link>
      </qgds-footer>
    </section>
  );
};

export default Footer;
