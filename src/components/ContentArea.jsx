import React from "react";

const ContentArea = () => {
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "46px",
    paddingLeft: "0",
    paddingBottom: "0",
    boxSizing: "border-box",
    minWidth: "909px",
    textAlign: "left",
    fontSize: "17xl",
    color: "#000000", // Assuming text-gray-01 corresponds to this color
    fontFamily: "timesroman",
  };

  const divStyle = {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    gap: "50px",
  };

  const innerDivStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "start",
    paddingRight: "4px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    boxSizing: "border-box",
    maxWidth: "100%",
  };

  const flexDivStyle = {
    flex: 1,
    borderRadius: "20px",
    backgroundColor: "#32cc54", // Assuming bg-limegreen-100 corresponds to this color
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "26px",
    paddingLeft: "37px",
    paddingBottom: "25px",
    paddingRight: "700px",
    boxSizing: "border-box",
    maxWidth: "100%",
  };

  const imageStyle = {
    height: "343px",
    width: "1398px",
    position: "relative",
    backgroundColor: "#32cd32",
    display: "none",
    maxWidth: "100%",
  };

  const imgContainerStyle = {
    height: "259px",
    width: "317px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "25px",
    paddingLeft: "0",
    paddingBottom: "0",
    paddingRight: "0",
    boxSizing: "border-box",
  };

  const imgStyle = {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    borderRadius: "20px",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    objectFit: "cover",
    zIndex: 1,
  };

  const verticalLineStyle = {
    height: "292px",
    width: "1px",
    position: "relative",
    objectFit: "contain",
    zIndex: 1,
  };

  const textDivStyle = {
    width: "978px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "70px",
    paddingLeft: "400px",
    paddingBottom: "0",
    paddingRight: "80px",
    boxSizing: "border-box",
    marginLeft: "-994px",
  };

  const headingStyle = {
    margin: 0,
    alignSelf: "stretch",
    position: "relative",
    fontWeight: "normal",
    fontFamily: "timesroman",
    zIndex: 1,
    textDecoration: "none",
  };

  const secondDivStyle = {
    alignSelf: "stretch",
    borderRadius: "20px",
    backgroundColor: "#32cc54",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "26px",
    paddingRight: "37px",
    paddingBottom: "25px",
    paddingLeft: "47px",
    boxSizing: "border-box",
  };

  const secondImgContainerStyle = {
    height: "297px",
    width: "312px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "30px",
    paddingLeft: "0",
    paddingBottom: "10px",
    paddingRight: "0",
    boxSizing: "border-box",
  };

  const secondImgStyle = {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    borderRadius: "20px",
    maxWidth: "250px",
    overflow: "hidden",
    maxHeight: "100%",
    objectFit: "cover",
    zIndex: 1,
  };

  const verticalDividerStyle = {
    height: "302px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    paddingTop: "30px",
    paddingRight: "27px",
    paddingLeft: "0",
    paddingBottom: "0",
    boxSizing: "border-box",
  };

  const verticalLineSecondStyle = {
    flex: 1,
    position: "relative",
    boxSizing: "border-box",
    zIndex: 1,
    borderRight: "1px solid #34cc54",
  };

  const secondHeadingStyle = {
    margin: 0,
    flex: 1,
    position: "relative",
    fontWeight: "normal",
    fontFamily: "timesroman",
    paddingTop: "60px",
    paddingRight: "57px",
    paddingLeft: "20px",
    paddingBottom: "0",
    zIndex: 1,
    fontSize: "17xl",
    textDecoration: "none",
    
  };

  return (
    <section style={sectionStyle}>
      <div style={divStyle}>
        <div style={innerDivStyle}>
          <div style={flexDivStyle}>
            <div style={imageStyle} />
            <div style={imgContainerStyle}>
              <img
                style={imgStyle}
                loading="lazy"
                alt=""
                src="/comp-1@2x.png"
              />
            </div>
            <img
              style={verticalLineStyle}
              loading="lazy"
              alt=""
            />
          </div>
          <div style={textDivStyle}>
            <h2 style={headingStyle}>
              Farmers are dependent upon water to grow their cost-effective crops
\             successfully. With the demands on water increasing, between
              population growth and climate change, agriculture has developed
              many sustainable water solutions to better understand the water
              cycle and optimize and reduce their water use.
            </h2>
          </div>
        </div>
        <div style={secondDivStyle}>
          <div style={secondImgContainerStyle}>
            <img
              style={secondImgStyle}
              loading="lazy"
              alt=""
              src="/comp1-1@2x.png"
            />
          </div>
          <div style={verticalDividerStyle}>
            <div style={verticalLineSecondStyle} />
          </div>
          <h2 style={secondHeadingStyle}>
            Many farmers work with local municipal treatment plants using
            wastewater for irrigation purposes, preventing potential watershed
            pollution while providing farmers with an additional water resource
            that recharges groundwater aquifer systems.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContentArea;
