import Container from "../../../components/Container";
import Collaboration from "./Collaboration";
import Localization from "./Localization";
import Seo from "./SEO";
import WebflowApps from "./WebflowApps";

const Platforms = () => {
  return (
    <Container>
      <div className="p-5 flex flex-col gap-10">
        <WebflowApps />
        <Collaboration />
        <Seo />
        <Localization />
      </div>
    </Container>
  );
};

export default Platforms;
