import React from "react";
import FrameComponent1 from "./FrameComponent11";

const PostAndFilter = () => {
  return (
    <section
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "25px 0 0 0",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "16px",
        color: "#000000",
        fontFamily: "Times New Roman",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "9px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "0 46px",
            boxSizing: "border-box",
            color: "#34cc54",
          }}
        >
          {/* Posts Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "40px", // Adjusted gap
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "290px",
                gap: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "semibold",
                  color: "#fff",
                }}
              >
                Posts
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "20px",
                width: "100%",
              }}
            >
              <img
                style={{
                  height: "200px",
                  borderRadius: "22px",
                  objectFit: "cover",
                  width: "200px",
                }}
                loading="lazy"
                alt=""
                src="/image-272@2x.png"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "semibold",
                    }}
                  >
                    Post1
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#ababab",
                    }}
                  >
                    8m ago
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "24px",
                  }}
                >
                  Hey !! Check for new Post
                </div>
                <FrameComponent1 />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "20px",
                width: "100%",
              }}
            >
              <img
                style={{
                  height: "200px",
                  borderRadius: "22px",
                  objectFit: "cover",
                  width: "200px",
                }}
                loading="lazy"
                alt=""
                src="/post2-3@2x.png"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "semibold",
                    }}
                  >
                    Post2
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#ababab",
                    }}
                  >
                    8m ago
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "24px",
                  }}
                >
                  Hurray!! New credits added
                </div>
                <FrameComponent1 />
              </div>
            </div>
          </div>
          <hr
          style={{
            width: "80%",
            borderColor: "#ffffff",
            margin: "40px 0", // Space around the line
          }}
        />
          {/* Tags Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "40px", // Adjusted gap
              width: "50%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "290px",
                gap: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "semibold",
                  color: "#fff",
                }}
              >
                Tags
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "20px",
                width: "100%",
              }}
            >
              <img
                style={{
                  height: "200px",
                  borderRadius: "22px",
                  objectFit: "cover",
                  width: "200px",
                }}
                loading="lazy"
                alt=""
                src="/post2-3@2x.png"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "semibold",
                    }}
                  >
                    Tag1
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#808080",
                    }}
                  >
                    8m ago
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "24px",
                  }}
                >
                  Hey !! Check for new Post from Texas
                </div>
                <FrameComponent1 />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "20px",
                width: "100%",
              }}
            >
              <img
                style={{
                  height: "200px",
                  borderRadius: "22px",
                  objectFit: "cover",
                  width: "200px",
                }}
                loading="lazy"
                alt=""
                src="/image-272@2x.png"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "semibold",
                    }}
                  >
                    Tag2
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#808080",
                    }}
                  >
                    8m ago
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "24px",
                  }}
                >
                  Hurray!! New credits added for Tesla
                </div>
                <FrameComponent1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostAndFilter;
