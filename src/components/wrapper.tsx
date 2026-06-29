import "@qld-gov-au/qgds-web-components";

const Wrapper = () => {
  return (
    <section className="valign">
      <h3>Wrapper</h3>
      <div className="qgds valign">
        {/* <!-- Typography rules apply here --> */}
        <p>Styled by QGDS.</p>
        <a href="#">Styled link</a>

        {/* <!-- Components work inside or outside .qgds --> */}
        <qgds-button label="Submit"></qgds-button>
      </div>
    </section>
  );
};

export default Wrapper;
