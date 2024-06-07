import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ sHOPPING }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuButtons = [
    { label: "Home", path: "/home" },
    { label: "Schemes", path: "/schemes" },
    { label: "Industries", path: "/industries" },
    { label: "Individuals", path: "/individuals" },
    { label: "Subsidies", path: "/subsidies" },
    { label: "Dry-zone", path: "/dryzone" },
    { label: "Water management", path: "/wm" },
    { label: "Fertilizers", path: "/fertilizers" },
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
    zIndex: 1, // Ensure the menu appears above other content
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
        alignItems: "start",
        justifyContent: "space-between",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingRight: "10px",
        paddingLeft: "10px",
        boxSizing: "border-box",
        width: "100%",
        textAlign: "left",
        fontSize: "20px",
        backgroundColor: "#34cc54",
        color: "#000000",
        fontFamily: "timesroman",
        position: "fixed",
        zIndex: 2, // Ensure the menu icon appears above other content
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
        {sHOPPING}
      </h1>
      </div>
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          paddingTop: "1px",
          paddingRight: "0",
          paddingBottom: "0",
          paddingLeft: "0",
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


const Shopping = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  const containerStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    paddingTop: "70px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  };

  const buttonBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: "6rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "6rem",
    gap: "1rem",
    backgroundColor: "#000000",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
  };

  const buttonStyle = {
    padding: "10px 0px 10px 0px",
    margin: "5px",
    backgroundColor: "#34cc54",
    color: "#000000",
    border: "none",
    borderRadius: "5px",
    fontFamily: "timesroman",
    fontSize: "20px",
    cursor: "pointer",
    width: "200px",
    textAlign: "center",
  };

  const buttons = [
    { label: "Fertilizers", url: "https://farmkey.in/product-category/fertilizers" },
    { label: "Pesticides", url: "https://www.bighaat.com/collections/orgnaic-or-bio-crop-protection" },
    { label: "Seeds", url: "https://www.bighaat.com/collections/seeds-online" },
    { label: "Saplings", url: "https://www.bighaat.com/collections/saplings" },
    { label: "Chemicals", url: "https://www.bighaat.com/collections/fertilizers" },
    { label: "Agri Products", url: "https://www.kisanmandi.com/index.php/kisanmandi-products" },
    { label: "Home-Made Products", url: "https://www.indiahandmade.com/" },
  ];

  return (
    <div>
        <Menu sHOPPING="SHOPPING" />
      <div style={containerStyle}>
        <div style={buttonBoxStyle}>
          {buttons.map((button, index) => (
            <button
              key={index}
              style={buttonStyle}
              onClick={() => handleButtonClick(button.url)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopping;