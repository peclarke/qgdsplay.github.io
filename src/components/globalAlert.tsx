// import "@qld-gov-au/qgds-web-components";

import Alert from "@mui/material/Alert";

const GlobalAlert = () => {
  return (
    <section className="valign">
      <Alert variant="filled" severity="error">
        There is no global alert export from the web components. But, they have
        it working?? What's up with that? Who knows.
        <a
          target="_blank"
          href="https://qld-gov-au.github.io/qgds-web-components/?path=/docs/components-global-alert--docs"
        >
          Look for yourself
        </a>
      </Alert>
      <h3>Global Alert</h3>
      {/* <qgds-global-alert variant="warning" heading="Site notice" action-label="Learn more" action-href="#"><p>This website is currently undergoing testing</p></qgds-global-alert> */}
    </section>
  );
};

export default GlobalAlert;
