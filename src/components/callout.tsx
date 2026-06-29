import "@qld-gov-au/qgds-web-components/callout";

const Callout = () => {
  return (
    <section className="valign">
      <qgds-callout heading="Notice">
        {" "}
        This is the QGDS Callout component.{" "}
      </qgds-callout>
      <qgds-callout
        heading="Before you start"
        heading-level="h2"
        heading-size="md"
      >
        <p>
          Please read the following information carefully{" "}
          <strong>before proceeding:</strong>
        </p>
        <ul>
          <li>Ensure you have all necessary materials.</li>
          <li>Follow the instructions step by step.</li>
          <li>Contact support if you encounter any issues.</li>
        </ul>
      </qgds-callout>
    </section>
  );
};

export default Callout;
