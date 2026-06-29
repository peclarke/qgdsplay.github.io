import Alert from "@mui/material/Alert";
import "@qld-gov-au/qgds-web-components";

const Header = () => {
  return (
    <section className="valign qgds">
      <Alert variant="filled" severity="error">
        Another component that is missing exports and has improper styling. I've
        even implemented the custom styling they use on their storybook inside
        of our `index.css` file.
      </Alert>

      <h3>Header</h3>
      <qgds-header site-name="Insert site name">
        <qgds-attribution-bar slot="pre-header" palette="bold">
          <qgds-link
            slot="site-name"
            target="_blank"
            href="https://www.qld.gov.au"
            label="qld.gov.au"
          ></qgds-link>
          <qgds-link
            icon-name="phone"
            href="https://www.qld.gov.au/contact-us"
            label="Contact us"
          ></qgds-link>
        </qgds-attribution-bar>

        <qgds-search-input
          slot="search"
          placeholder="Search this site"
        ></qgds-search-input>

        <nav class="demo-nav" slot="navigation" aria-label="Main navigation">
          <a href="#">Menu text</a>
          <a href="#">Menu text</a>
          <a href="#">Menu text</a>
          <a href="#">Menu text</a>
          <a href="#">Menu text</a>
        </nav>
      </qgds-header>
    </section>
  );
};

export default Header;
