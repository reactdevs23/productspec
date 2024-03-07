import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Icon from "./images/Icon";
import { laptop, mobile } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#fff",
    lineColor: "#000",
    header: {
      subHeading: "PRODUCT DEVELOPMENT",
      subHeadingColor: "#0E9384",
      heading: "Enhancing Business Efficiency with abc.io",
      headingColor: "#000",
    },
    mainContent: {
      title: "abc.io",
      titleColor: "#0E9384",
      border: "26px solid #CCFBEF",
      bg: "#5FE9D0",
    },
    device: {
      img: laptop,
    },
    features: [
      {
        icon: <Icon bg="#2ED3B7" color="#fff" />,
        title: "Service Optimization",
        titleColor: "#000",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor. ",
        infoColor: "#000",
        border: "1px solid  #2ED3B7",
        bg: "#F0FDF9",
      },
      {
        icon: <Icon bg="#2ED3B7" color="#fff" />,
        title: "Engineering Excellence",
        titleColor: "#000",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor. ",
        infoColor: "#000",
        border: "1px solid  #2ED3B7",
        bg: "#F0FDF9",
      },
      {
        icon: <Icon bg="#2ED3B7" color="#fff" />,
        title: "Asset utilization",
        titleColor: "#000",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor. ",
        infoColor: "#000",
        border: "1px solid  #2ED3B7",
        bg: "#F0FDF9",
      },
      {
        icon: <Icon bg="#2ED3B7" color="#fff" />,
        title: "Service Innovation",
        titleColor: "#000",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor. ",
        infoColor: "#000",
        border: "1px solid  #2ED3B7",
        bg: "#F0FDF9",
      },
      {
        icon: <Icon bg="#2ED3B7" color="#fff" />,
        title: "Transparency",
        titleColor: "#000",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor. ",
        infoColor: "#000",
        border: "1px solid  #2ED3B7",
        bg: "#F0FDF9",
      },
      {
        icon: <Icon bg="#2ED3B7" color="#fff" />,
        title: "Traceability",
        titleColor: "#000",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor. ",
        infoColor: "#000",
        border: "1px solid  #2ED3B7",
        bg: "#F0FDF9",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
