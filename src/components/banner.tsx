import { Alert } from "@mui/material";
import "@qld-gov-au/qgds-web-components/breadcrumbs";

const Banner = () => {
  return (
    <section className="valign">
      <Alert variant="filled" severity="error">
        The banner component is not exported from the web components. <br></br>
        But, the breadcrumbs component is working. So, that's good news!
        <br />
        <a
          target="_blank"
          href="https://qld-gov-au.github.io/qgds-web-components/?path=/docs/components-banner--docs"
        >
          Banner Component
        </a>
      </Alert>

      <h3>Banner Component</h3>

      {/* <qgds-banner variant="default" palette="bold" heading="Cancelling your vehicle, trailer, caravan, motorised mobility device or boat registration" has-shadow=""> */}
      <qgds-breadcrumbs slot="breadcrumbs" aria-label="Breadcrumbs">
        <qgds-breadcrumbs-item target="_self" rel="bookmark" url="/home">
          Home
        </qgds-breadcrumbs-item>
        <qgds-breadcrumbs-item target="_self" rel="bookmark" url="/level2">
          Level 2
        </qgds-breadcrumbs-item>
        <qgds-breadcrumbs-item target="_self" rel="bookmark" url="/level3">
          Level 3
        </qgds-breadcrumbs-item>
        <qgds-breadcrumbs-item target="_self" rel="bookmark" url="/level4">
          Level 4
        </qgds-breadcrumbs-item>
        <qgds-breadcrumbs-item
          target="_self"
          rel="bookmark"
          url="/current_page"
        >
          Current page
        </qgds-breadcrumbs-item>
      </qgds-breadcrumbs>
      {/* </qgds-banner> */}
    </section>
  );
};

export default Banner;
