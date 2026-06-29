import Alert from "@mui/material/Alert";
import "@qld-gov-au/qgds-web-components/button";
import "@qld-gov-au/qgds-web-components/icon";

const Buttons = () => {
  return (
    <section>
      <Alert variant="filled" severity="success">
        Using the "qgds" class in the container with the components makes it
        work
      </Alert>
      <h3>Button Component</h3>
      <div className="qgds valign">
        <qgds-button
          type="button"
          label="QGDS Button"
          variant="primary"
          loading-label="Loading..."
        >
          <qgds-icon
            slot="icon"
            size="md"
            icon-id="external-link"
            aria-label=""
          >
            {" "}
          </qgds-icon>
        </qgds-button>

        <qgds-button
          type="button"
          label="No Icon"
          variant="primary"
          loading-label="Loading..."
        ></qgds-button>

        <qgds-button
          type="button"
          label="Secondary"
          variant="secondary"
          loading-label="Loading..."
        >
          <qgds-icon
            slot="icon"
            size="md"
            icon-id="external-link"
            aria-label=""
          >
            {" "}
          </qgds-icon>
        </qgds-button>

        <qgds-button
          type="button"
          label="Tertiary"
          variant="tertiary"
          loading-label="Loading..."
        >
          <qgds-icon
            slot="icon"
            size="md"
            icon-id="external-link"
            aria-label=""
          >
            {" "}
          </qgds-icon>
        </qgds-button>

        <qgds-button
          type="button"
          label="Disabled"
          variant="primary"
          disabled
          loading-label="Loading..."
        >
          <qgds-icon
            slot="icon"
            size="md"
            icon-id="external-link"
            aria-label=""
          >
            {" "}
          </qgds-icon>
        </qgds-button>
      </div>
    </section>
  );
};

export default Buttons;
