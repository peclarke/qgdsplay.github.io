import Alert from "@mui/material/Alert";
import "@qld-gov-au/qgds-web-components";

const Tabs = () => {
  return (
    // doesn't work with qgds class here either
    <section className="valign">
      <Alert variant="filled" severity="error">
        Another component that isn't exported. Doesn't work, there are no tabs
        or styling that are present.
      </Alert>
      <h3>Tabs</h3>

      <qgds-tabs palette="">
        <qgds-tabs-item label="Tab label 1" icon-name="home">
          <h2>Section Heading (H2)</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
          <a
            class="qld-cta-link"
            href="#"
            target="_blank"
            aria-label="Call to action"
          >
            Call to action<span class="icon" aria-hidden="true"></span>
          </a>
        </qgds-tabs-item>
        <Alert
          style={{ marginTop: "1rem" }}
          variant="filled"
          severity="warning"
        >
          They make a custom call to action here, but they already have a
          component for it?? Let me try using it
        </Alert>
        <qgds-call-to-action
          style={{ marginTop: "1rem" }}
          href="#"
          label="Call to action"
        ></qgds-call-to-action>
        <Alert style={{ marginTop: "1rem" }} variant="filled" severity="info">
          That worked... fine!
        </Alert>
        <qgds-tabs-item label="Tab label 2" icon-name="design">
          <h2>Section Heading Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
        </qgds-tabs-item>
        <qgds-tabs-item label="Tab label 3" icon-name="settings">
          <h2>Section Heading Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
        </qgds-tabs-item>
        <qgds-tabs-item label="Tab label 4">
          <h2>Section Heading Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
        </qgds-tabs-item>
        <qgds-tabs-item label="Tab label 5">
          <h2>Section Heading Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
        </qgds-tabs-item>
        <qgds-tabs-item label="Tab label 6">
          <h2>Section Heading Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu
            mauris ac at ultricies est. Tincidunt ultrices commodo vestibulum
            non netus. Mauris maecenas lacus hendrerit urna ultricies auctor.
            Sed tristique nascetur sapien condimentum adipiscing augue quisque
            eu. Facilisi ligula quam faucibus feugiat. Sapien at at eget
            malesuada senectus donec pellentesque pellentesque odio.
          </p>
        </qgds-tabs-item>
      </qgds-tabs>
    </section>
  );
};

export default Tabs;
