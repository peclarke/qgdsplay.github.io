import "@qld-gov-au/qgds-web-components";

const Tags = () => {
  return (
    <section className="valign qgds">
      <h3>Tags</h3>

      <qgds-tag label="Default" variant="default"></qgds-tag>
      <qgds-tag label="Information" variant="info"></qgds-tag>
      <qgds-tag href="#" label="Action link" variant="default"></qgds-tag>
      <qgds-tag label="Action button" variant="action"></qgds-tag>
      <qgds-tag label="Dismissible" variant="dismissible"></qgds-tag>
    </section>
  );
};

export default Tags;
