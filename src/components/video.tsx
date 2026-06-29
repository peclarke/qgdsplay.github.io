import Alert from "@mui/material/Alert";
import "@qld-gov-au/qgds-web-components";

const Video = () => {
  return (
    <section className="valign">
      <Alert variant="filled" severity="error">
        Another component that isn't exported. Doesn't work, no video appears!
      </Alert>
      <h3>Video</h3>
      <qgds-video
        aspect-ratio="16x9"
        caption="Caption text goes here"
        duration="3:12"
        source="youtube"
        thumbnail="https://img.youtube.com/vi/LDU_Txk06tM/sddefault.jpg"
        video-id="LDU_Txk06tM"
      ></qgds-video>
    </section>
  );
};

export default Video;
