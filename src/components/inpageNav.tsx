import "@qld-gov-au/qgds-web-components/inpage-nav";

const InpageNav = () => {
  return (
    <section className="valign">
      <h3>Inpage Nav Component</h3>

      <qgds-inpage-nav
        heading="On this page"
        heading-level="h2"
        aria-label="In page navigation"
      >
        <qgds-inpage-nav-item href="#introduction">
          Introduction
        </qgds-inpage-nav-item>
        <qgds-inpage-nav-item href="#overview">Overview</qgds-inpage-nav-item>
        <qgds-inpage-nav-item href="#getting-started">
          Getting started
        </qgds-inpage-nav-item>
      </qgds-inpage-nav>

      <qgds-inpage-nav
        heading="On this page"
        heading-level="h2"
        aria-label="In page navigation"
      >
        <qgds-inpage-nav-item href="#section1">
          Section 1: Introduction
        </qgds-inpage-nav-item>
        <qgds-inpage-nav-item href="#section2">
          Section 2: Background
        </qgds-inpage-nav-item>
        <qgds-inpage-nav-item href="#section3">
          Section 3: Requirements
        </qgds-inpage-nav-item>
        <qgds-inpage-nav-item href="#section4">
          Section 4: Implementation
        </qgds-inpage-nav-item>
        <qgds-inpage-nav-item href="#section5">
          Section 5: Testing
        </qgds-inpage-nav-item>
        <qgds-inpage-nav-item href="#section6">
          Section 6: Deployment
        </qgds-inpage-nav-item>
        <qgds-inpage-nav-item href="#section7">
          Section 7: Maintenance
        </qgds-inpage-nav-item>
      </qgds-inpage-nav>
    </section>
  );
};

export default InpageNav;
