import { useState } from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import Buttons from "./components/buttons";
import Callout from "./components/callout";
import InpageNav from "./components/inpageNav";
import GlobalAlert from "./components/globalAlert";
import Form from "./components/form";
import pkg from "../package.json";
import Accordion from "./components/accordion";
import Banner from "./components/banner";
import Cards from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import Logo from "./components/logo";
import Tabs from "./components/tabs";
import Tags from "./components/tags";
import Video from "./components/video";
import Wrapper from "./components/wrapper";

const App = () => {
  const [selected, setSelected] = useState("buttons");
  const comps = {
    buttons: Buttons,
    callout: Callout,
    inpageNav: InpageNav,
    globalAlert: GlobalAlert,
    form: Form,
    accordion: Accordion,
    banner: Banner,
    cards: Cards,
    footer: Footer,
    header: Header,
    logo: Logo,
    tabs: Tabs,
    tagLabels: Tags,
    video: Video,
    wrapper: Wrapper,
  };

  const SelectedComponent = comps[selected];
  const qgdsVersion = pkg.dependencies?.["@qld-gov-au/qgds-web-components"];

  return (
    <main style={{ margin: "2%" }}>
      <header>
        <Typography variant="h3" component="h1">
          QGDS: Does This Work Yet?
        </Typography>
        <Typography variant="subtitle1" component="h2">
          Your definitive tool for checking if a component works yet
          <br />
          <code>QGDS version: {qgdsVersion}</code>
        </Typography>
        <Select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          sx={{ width: "30%", mt: 1, minWidth: "400px" }}
        >
          {Object.keys(comps).map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </header>

      <section style={{ marginTop: "2%" }}>
        <SelectedComponent />
      </section>
    </main>
  );
};

export default App;
