import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wm = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const menuButtons = [
    { label: "Home", path: "/home" },
    { label: "Schemes", path: "/schemes" },
    { label: "Industries", path: "/industries" },
    { label: "Individuals", path: "/individuals" },
    { label: "Subsidies", path: "/subsidies" },
    { label: "Dry-zone", path: "/dryzone" },
    { label: "Fertilizers", path: "/fertilizers" },
    { label: "Shopping", path: "/shopping" },
    { label: "Workers", path: "/work" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateToPage = (path) => {
    navigate(path);
    toggleMenu(); // Close the menu after navigating
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

  const wm = "WATER MANAGEMENT";
  const wmWidth = "593px";

  const wmStyle = useMemo(() => {
    return {
      width: wmWidth,
    };
  }, [wmWidth]);

  const menuStyles = {
    position: "absolute",
    top: "80px",
    left: "20px",
    backgroundColor: "#1c1c1c",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "1rem",
    borderRadius: "0.5rem",
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
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#000000",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        gap: "15px",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
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
        {wm}
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
      
      <main
        style={{
          width: "950px",
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "start",
          paddingTop: "0",
          paddingBottom: "3px",
          paddingLeft: "21px",
          boxSizing: "border-box",
          gap: "83px",
          textAlign: "left",
          color: "#000000",
          fontFamily: "timesroman",
        }}
      >
        <div
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "start",
            gap: "29px",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              paddingTop: "85px",
              paddingLeft: "20px",
              boxSizing: "border-box",
              minWidth: "300px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "900px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                gap: "110px",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  flex: 1,
                  position: "relative",
                  borderRadius: "20px",
                  paddingTop:"10px",
                  borderRadius:"30px",
                  maxWidth: "500px",
                  overflow: "hidden",
                  maxHeight: "230px",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src="/water-1@2x.png"
              />
              <img
                style={{
                  alignSelf: "stretch",
                  flex: 1,
                  position: "relative",
                  borderRadius: "30px",
                  paddingTop:"10px",
                  maxWidth: "500px",
                  overflow: "hidden",
                  maxHeight: "230px",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src="/water2-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            width:"50px",
            marginLeft:"40px",
            height:"80px",
            paddingTop: "85px",
            paddingLeft: "30px",
            boxSizing: "border-box",
          }}
        >
         
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                justifyContent: "start",
                paddingTop: "10px",
                marginTop:"10px",
                width:"600px",
                borderRadius:"20px",
                marginRight:"400px",
                paddingLeft: "51px",
                textAlign:"justify",
                marginBottom:"150px",
                backgroundColor:"#34cc54",
                color:"#000000",
                boxSizing: "border-box",
              }}
            >
              
                
                <h2
                  style={{
                    margin: "10px",
                    flex: 1,
                    position: "relative",
                    color: "inherit",
                    fontWeight: "normal",
                    fontFamily: "timesroman",
                    maxWidth: "500px",
                    zIndex: 1,
                  }}
                >
                  Farmers are dependent upon water to
                  successfully. With the demands on water increasing, between
                  population growth and climate change, agriculture has
                  developed many sustainable water solutions to better
                  understand the water cycle and optimize and reduce their water
                  use.
                </h2>
              </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "20px",
                backgroundColor: "#34cc54",
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                justifyContent: "start",
                paddingTop: "38px",
                paddingRight: "37px",
                paddingBottom: "38px",
                paddingLeft: "21px",
                width:"600px",
                boxSizing: "border-box",
              }}
            >
              <h2
                style={{
                  margin: "0",
                  flex: 1,
                  position: "relative",
                  color: "#000000",
                  fontWeight: "normal",
                  textAlign:"justify",
                  paddingLeft:"41px",
                  fontFamily: "timesroman",
                  display: "inline-block",
                  maxWidth: "500px",
                  zIndex: 1,
                }}
              >
                Many farmers work with local municipal treatment plants using
                wastewater for irrigation purposes, preventing potential
                watershed pollution while providing farmers with an additional
                water resource that recharges groundwater aquifer systems.
              </h2>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Wm;
