import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  header,
  features,
  device,
  lineColor,
  mainContent,
}) => {
  const splitIndex = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, splitIndex);
  const rightFeatures = features.slice(splitIndex);

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper} style={{ "--lineColor": lineColor }}>
        <div className={classes.headingContainer}>
          <h3
            className={classes.subHeading}
            style={{ "--color": header.subHeadingColor }}
          >
            {header.subHeading}
          </h3>
          <h1
            className={classes.heading}
            style={{ "--color": header.headingColor }}
          >
            {header.heading}
          </h1>
        </div>
        <div className={classes.wrapper}>
          <div
            className={[
              classes.features,
              classes.featuresLeft,
              classes[`features${features.length}`],
            ].join(" ")}
          >
            {leftFeatures.map((feature, i) => (
              <div
                key={i}
                className={[classes.feature, classes[`feature-${i + 1}`]].join(
                  " "
                )}
                style={{
                  "--border": feature.border,
                  "--bg": feature.bg,
                }}
              >
                <div className={classes.featureHeader}>
                  <h2
                    className={classes.title}
                    style={{
                      "--color": feature.titleColor,
                    }}
                  >
                    {feature.title}
                  </h2>
                  <div className={classes.icon}>{feature.icon}</div>
                </div>
                <p
                  className={classes.info}
                  style={{
                    "--color": feature.infoColor,
                  }}
                >
                  {feature.info}
                </p>
              </div>
            ))}
          </div>
          <div className={classes.deviceContainer}>
            <div className={classes.device}>
              <img src={device.img} alt="#" className={classes.img} />
              <div
                className={classes.mainContent}
                style={{
                  "--bg": mainContent.bg,
                  "--border": mainContent.border,
                }}
              >
                <h2
                  className={classes.mainTitle}
                  style={{ "--color": mainContent.titleColor }}
                >
                  {mainContent.title}
                </h2>
              </div>
            </div>
          </div>
          <div
            className={[
              classes.features,
              classes.featuresRight,
              classes[`features${features.length}`],
            ].join(" ")}
          >
            {rightFeatures.map((feature, i) => (
              <div
                key={i}
                className={[
                  classes.feature,
                  classes[`feature-${leftFeatures.length + i + 1}`],
                ].join(" ")}
                style={{
                  "--border": feature.border,
                  "--bg": feature.bg,
                }}
              >
                <div className={classes.featureHeader}>
                  <h2
                    className={classes.title}
                    style={{
                      "--color": feature.titleColor,
                    }}
                  >
                    {feature.title}
                  </h2>
                  <div className={classes.icon}>{feature.icon}</div>
                </div>
                <p
                  className={classes.info}
                  style={{
                    "--color": feature.infoColor,
                  }}
                >
                  {feature.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
