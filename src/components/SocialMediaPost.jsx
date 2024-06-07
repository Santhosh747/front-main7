import React from "react";

const SocialMediaPost = ({ className = "" }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#000000", // Adjusted background color to match a dark theme
        paddingLeft: "200px",
        paddingTop:"100px"
      }}
    >
      <div
        className={className}
        style={{
          width: "100px",
          backgroundColor: "black",
          maxWidth: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          paddingTop: "20px",
          paddingBottom: "100px",
          paddingRight: "589px",
          paddingLeft: "66px",
          boxSizing: "border-box",
          gap: "20px",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          fontSize: "small",
          color: "white",
          fontFamily: "small-text",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
         
          <div
            style={{
              height: "431px",
              flex: 1,
              position: "relative",
              minWidth: "194px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                paddingTop: "0",
                paddingRight: "0",
                paddingBottom: "0",
                paddingLeft: "0",
                boxSizing: "border-box",
                gap: "12px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                  paddingTop: "0",
                  paddingRight: "10px",
                  paddingBottom: "0",
                  paddingLeft: "0",
                  position: "relative",
                  gap: "92px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "start",
                      justifyContent: "start",
                      paddingTop: "0",
                      paddingRight: "110px",
                      paddingBottom: "0",
                      paddingLeft: "0",
                      gap: "4px",
                      boxSizing: "border-box",
                    }}
                  >
                    <b
                      style={{
                        width: "50px",
                        position: "relative",
                        bottom:"3px",
                        left: "2px",
                        lineHeight: "150%",
                        fontWeight: "600",
                        display: "inline-block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {`Helena `}
                    </b>
                    <div
                      style={{
                        flex: 1,
                        position: "relative",
                        lineHeight: "150%",
                        color: "black",
                        display: "inline-block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        minWidth: "63px",
                      }}
                    >
                    </div>
                  </div>
                </div>
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "absolute",
                    Top: "20px",
                    bottom: "1px",
                    left: "-30px",
                    overflow: "hidden",
                    flexShrink: 0,
                    objectFit: "cover",
                  }}
                  loading="lazy"
                  alt=""
                  src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
                />
              </div>
              <img
                style={{
                  width: "299px",
                  height: "299px",
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  flexShrink: 0,
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src="https://t3.ftcdn.net/jpg/07/23/64/88/240_F_723648813_yJR9v5l0bUbxDwRBptfHLdgrAlm6C8Ml.jpg"
              />
              <div style={{ width: "28px", height: "5px", flexShrink: 0 }} />
              <div style={{ alignSelf: "stretch", height: "5px", flexShrink: 0 }} />
              <div
                style={{
                  width: "250px",
                  position: "relative",
                  lineHeight: "150%",
                  fontWeight: "500",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              >
                <p style={{ marginTop: "30px" }}>
                  Description: 
                  this is a plant from moon 
                  which is planted in soil
                  please validate it
                </p>
                <p style={{ marginTop: "55px" }}>Validated photo:</p>
                <p style={{ marginTop: "127px", marginLeft:"10px" }}>Validated By: Ram747</p>
                <img
                  style={{ marginBottom: "1px",marginLeft: "-10px", height: "16px", width: "16px",marginRight:"10px",paddingTop:"0px" }}
                  src="https://cdn-icons-png.flaticon.com/128/3608/3608172.png"
                  alt="comment icon"
                />
                <div style={{  marginLeft: "20px",marginTop:"-25px" }}><b>Ram:</b> Awesome</div>
                 
               
             </div>
              <div
                style={{
                  width: "233px",
                  position: "absolute",
                  margin: "0",
                  bottom: "37px",
                  left: "0",
                  lineHeight: "140%",
                  display: "-webkit-inline-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  maxHeight: "47px",
                  wordBreak: "break-word",
                  zIndex: 1,
                }}
              >
                Location: https://maps.app.goo.gl/hB3L86M88mfSnsaX9
              </div>
            </div>
            <button
              style={{
                cursor: "pointer",
                border: "none",
                paddingTop: "7px",
                paddingRight: "18px",
                paddingBottom: "7px",
                paddingLeft: "18px",
                backgroundColor: "limegreen",
                position: "absolute",
                top: "455px",
                left: "1px",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                justifyContent: "start",
                zIndex: 2,
                hover: { backgroundColor: "limegreen-200" },
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "base",
                  lineHeight: "150%",
                  fontWeight: "500",
                  fontFamily: "small-text",
                  color: "black",
                  textAlign: "left",
                  display: "inline-block",
                  gap:"10px",
                  minWidth: "50px",
                }}
              >
                Validate
              </div>
            </button>
          </div>
        </div>
        <div
          style={{
            width: "313px",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "end",
            paddingTop: "0",
            paddingRight: "7px",
            paddingBottom: "0",
            paddingLeft: "7px",
            boxSizing: "border-box",
            fontSize: "base",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "start",
              gap: "23px",
            }}
          >
            <div
              style={{
                width: "286px",
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                justifyContent: "center",
                paddingTop: "75px",
                paddingRight: "220px",
                paddingBottom: "0px",
                paddingLeft: "0px",
                boxSizing: "border-box",
              }}
            >
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  position: "relative",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src="https://t3.ftcdn.net/jpg/07/23/64/88/240_F_723648813_yJR9v5l0bUbxDwRBptfHLdgrAlm6C8Ml.jpg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <input
                style={{
                  marginTop: "1px",
                  marginRight:"300px",
                  height: "15px",
                  width: "15px",
                }}
                type="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPost;
