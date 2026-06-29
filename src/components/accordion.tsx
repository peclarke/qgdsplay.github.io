import "@qld-gov-au/qgds-web-components/accordion-group";
import "@qld-gov-au/qgds-web-components/accordion";
import Alert from "@mui/material/Alert";

const Accordion = () => {
  return (
    <section className="valign qgds">
      <h3>Accordion Component</h3>
      <qgds-accordion-group show-controls="auto">
        <qgds-accordion is-open="" title="This accordion is initially open.">
          <p>
            This is the <strong>content</strong>.
          </p>
        </qgds-accordion>

        <qgds-accordion title="This accordion is initially closed.">
          <p>
            This is the <strong>content</strong>.
          </p>
        </qgds-accordion>

        <qgds-accordion title="This accordion is initially closed.">
          <p>
            This is the <strong>content</strong>.
          </p>
        </qgds-accordion>
      </qgds-accordion-group>
    </section>
  );
};

export default Accordion;
