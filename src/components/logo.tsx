import Alert from "@mui/material/Alert";
import "@qld-gov-au/qgds-web-components";

const Logo = () => {
  return (
    <section>
      <Alert variant="filled" severity="error">
        Another component that isn't exported. Doesn't work
      </Alert>
      <h3>Logo</h3>
      {/* <!-- Delivering lockup (Masterbrand only) --> */}
      <qgds-logo
        logo="coa-delivering-for-qld"
        href="https://www.qld.gov.au"
        alt="Queensland Government delivering for Queensland logo"
      ></qgds-logo>

      {/* <!-- Stacked Coat of Arms (Masterbrand, Subbrand) --> */}
      <qgds-logo
        logo="coa-stacked"
        href="https://www.qld.gov.au"
        alt="Queensland Government stacked COA logo"
      ></qgds-logo>

      {/* <!-- Co-branded logos (Cobrand with partner) --> */}
      <qgds-logo
        logo="coa-stacked"
        custom-logo-alt="Partner Organisation"
        href="https://www.breastscreen.qld.gov.au"
        alt="Queensland Government co-brand with partner. COA stacked paired with a custom logo"
        custom-logo="https://qld-gov-au.github.io/qgds-web-components/assets/breast-screen-qld-logo-Bi8SoH0x.svg"
      ></qgds-logo>

      {/* <!-- Custom Logos (Endorsed, Standalone) --> */}
      <qgds-logo
        logo="none"
        custom-logo-alt="Agency Name"
        custom-logo="https://qld-gov-au.github.io/qgds-web-components/assets/breast-screen-qld-logo-Bi8SoH0x.svg"
      ></qgds-logo>
    </section>
  );
};

export default Logo;
