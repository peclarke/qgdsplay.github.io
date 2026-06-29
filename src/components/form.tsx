import "@qld-gov-au/qgds-web-components/textarea";
import "@qld-gov-au/qgds-web-components/text-input";
import "@qld-gov-au/qgds-web-components/select";
// import "@qld-gov-au/qgds-web-components/select-option";
import "@qld-gov-au/qgds-web-components/checkbox";
import "@qld-gov-au/qgds-web-components/checkbox-group";
import "@qld-gov-au/qgds-web-components/radio";
import "@qld-gov-au/qgds-web-components/radio-group";
// import "@qld-gov-au/qgds-web-components/option";
import "@qld-gov-au/qgds-web-components";
import Alert from "@mui/material/Alert";

const Form = () => {
  return (
    <section className="valign">
      <Alert variant="filled" severity="error">
        The things that don't work:
        <ul>
          <li>File Upload</li>
          <li>Required star on inputs</li>
        </ul>
      </Alert>

      <Alert variant="filled" severity="warning">
        The alert component is not imported from the web components. Instead, we
        have to use custom styled components? Which is odd.
        <br />
        This is also a server validated form, so the buttons at the botttom are
        also custom. I had to implement more custom JSX code than I had
        expected, or needed to with a library like MUI.
      </Alert>

      <h3>Form Component</h3>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: "600px",
          fontFamily: "sans-serif",
        }}
      >
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "1rem",
          }}
        >
          <legend
            style={{
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#444",
              padding: "0 0.25rem",
            }}
          >
            Server validation (simulated)
          </legend>

          <qgds-text-input
            id="ServerValidationOnly_name"
            required
            name="name"
            label="Full name"
            hint="Required field"
            required=""
            variant="outlined"
            indicate-if="required"
          ></qgds-text-input>

          <qgds-textarea
            id="ServerValidationOnly_info"
            name="info"
            label="Information"
            required=""
            variant="outlined"
            indicate-if="required"
          ></qgds-textarea>

          <qgds-select
            id="ServerValidationOnly_pet"
            name="pet"
            label="Favourite pet"
            required=""
            variant="outlined"
            indicate-if="required"
          >
            <qgds-select-option value="dog" label="Dog"></qgds-select-option>
            <qgds-select-option value="cat" label="Cat"></qgds-select-option>
          </qgds-select>

          <qgds-checkbox-group
            id="ServerValidationOnly_interests"
            name="interests"
            label="Interests"
            required=""
            indicate-if="required"
          >
            <qgds-checkbox value="design" label="Design"></qgds-checkbox>
            <qgds-checkbox value="code" label="Code"></qgds-checkbox>
          </qgds-checkbox-group>

          <qgds-radio-group
            id="ServerValidationOnly_priority"
            name="priority"
            label="Priority"
            required=""
            indicate-if="required"
          >
            <qgds-radio value="low" label="Low"></qgds-radio>
            <qgds-radio value="high" label="High"></qgds-radio>
          </qgds-radio-group>

          {/* <qgds-file-upload accept="*" hint="This mocks all supported file type icons and statuses." id="AllFileStatuses" indicate-if="required" label="All file statuses" max-files="1" max-size="100"></qgds-file-upload> */}
        </fieldset>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "4px",
              border: "1px solid #1a73e8",
              background: "#1a73e8",
              color: "white",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            Submit
          </button>

          <button
            type="reset"
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "4px",
              border: "1px solid #aaa",
              background: "white",
              color: "#444",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
