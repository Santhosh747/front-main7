import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ iNDIVIDUALS }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuButtons = [
    { label: "Home", path: "/home" },
    { label: "Schemes", path: "/schemes" },
    { label: "Industries", path: "/industries" },
    { label: "Subsidies", path: "/subsidies" },
    { label: "Dry-zone", path: "/dryzone" },
    { label: "Water management", path: "/wm" },
    { label: "Fertilizers", path: "/fertilizers" },
    { label: "Shopping", path: "/shopping" },
    { label: "Workers", path: "/work" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateToPage = (path) => {
    navigate(path);
    toggleMenu();
  };

  const handleAddPost = () => {
    navigate("/addpost");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleSignOutClick = () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      navigate("/login");
    }
  };

  const menuStyles = {
    position: "absolute",
    top: "80px",
    left: "20px",
    backgroundColor: "#1c1c1c",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "1rem",
    borderRadius: "0.5rem",
    zIndex: 1000,
  };

  const buttonStyles = {
    display: "block",
    padding: "0.5rem 1rem",
    color: "#34cc54",
    backgroundColor: "#000000",
    cursor: "pointer",
    borderRadius: "0.25rem",
    marginBottom: "0.5rem",
    width: "100%",
    textAlign: "center",
    fontSize: "1.3rem",
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        boxSizing: "border-box",
        width: "100%",
        textAlign: "left",
        fontSize: "20px",
        backgroundColor: "#34cc54",
        color: "#000000",
        fontFamily: "timesroman",
        position: "fixed",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          height: "32px",
          width: "100%",
          backgroundColor: "#000000",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px", // Adjust this gap to reduce space
    }}
  >
      <button
            onClick={toggleMenu}
            style={{
              backgroundColor: "#34cc54",
              cursor: "pointer",
              border: "none",
              height: "50px",
              width: "50px",
              position: "relative",
              overflow: "hidden",
              minWidth: "50px",
            }}
          >
            <img
              style={{
                height: "35px",
                width: "35px",
                position: "relative",
                overflow: "hidden",
                minWidth: "40px",
              }}
              loading="lazy"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/54/54630.png"
            />
          </button>
      <h1
        style={{
          margin: "0",
          position: "relative",
          fontWeight: "bold",
          display: "inline-block",
          paddingLeft: "10px",
        }}
      >
        {iNDIVIDUALS}
      </h1>
      </div>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          padding: "0",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
           <button
      onClick={handleAddPost}
      style={{
        backgroundColor: "#34cc54",
        cursor: "pointer",
        border: "none",
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          height: "35px",
          width: "35px",
        }}
        loading="lazy"
        alt="Menu"
        src="https://www.svgrepo.com/show/59773/plus-square-button.svg"
      />
    </button>
          <button
            onClick={handleProfileClick}
            style={{
              backgroundColor: "#34cc54",
              cursor: "pointer",
              border: "none",
              height: "50px",
              width: "50px",
              position: "relative",
              overflow: "hidden",
              minWidth: "50px",
            }}
          >
            <img
              style={{
                height: "45px",
                width: "35px",
                position: "relative",
                overflow: "hidden",
                minWidth: "40px",
              }}
              loading="lazy"
              alt=""
              src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
            />
          </button>
          <button
            onClick={handleSignOutClick}
            style={{
              backgroundColor: "#34cc54",
              cursor: "pointer",
              border: "none",
              height: "50px",
              width: "50px",
              position: "relative",
              overflow: "hidden",
              minWidth: "50px",
            }}
          >
            <img
              style={{
                height: "35px",
                width: "35px",
                position: "relative",
                overflow: "hidden",
                minWidth: "40px",
              }}
              loading="lazy"
              alt=""
              src="/uilsignout.svg"
            />
          </button>
          
        </div>
      </div>
      {showMenu && (
        <div style={menuStyles}>
          {menuButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => navigateToPage(button.path)}
              style={buttonStyles}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

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
    color: "#000000",
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
    backgroundColor: "#32cc54",
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
                src="https://www.cuinsight.com/wp-content/uploads/2022/06/bigstock-Environment-Earth-Day-In-The-H-295688680.jpg"
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
              successfully. With the demands on water increasing, between
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
              src="https://products.mpowerpromo.com/SRCG/OPT6612/OPT6612/f7c45c8436ec4224bb19781ed897f852.jpg"            />
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

const Individuals = () => {
  const containerStyle = {
    width: "100%",
    position: "relative",
    backgroundColor: "#000000",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "0",
    paddingLeft: "0",
    paddingBottom: "0.4px",
    paddingRight: "0",
    boxSizing: "border-box",
  };

  const mainStyle = {
    width: "987px",
    flexDirection: "row",
    justifyContent: "start",
    paddingTop: "60px",
    paddingRight: "5px",
    paddingLeft: "90px",
  };

  return (
    <div>
      <div style={containerStyle}>
        <Menu iNDIVIDUALS="INDIVIDUALS" />
        <main style={mainStyle}>
          <ContentArea />
        </main>
      </div>
    </div>
  );
};

export default Individuals;
