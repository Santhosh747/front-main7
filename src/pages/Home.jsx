import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "./displaypost";

const Home = ({ hOME = "AGROCOM" }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [posts, setPosts] = useState([]); // State to hold the fetched posts
  const menuButtons = [
    { label: "Schemes", path: "/schemes" },
    { label: "Industries", path: "/industries" },
    { label: "Individuals", path: "/individuals" },
    { label: "Subsidies", path: "/subsidies" },
    { label: "Dry-zone", path: "/dryzone" },
    { label: "Water management", path: "/wm" },
    { label: "Fertilizers", path: "/fertilizers" },
    { label: "Shopping", path: "/shopping" },
    { label: "Workers", path: "/work" },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts/allposts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

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
    <div style={{ backgroundColor: "#000000", minHeight: "100vh", color: "#34cc54" }}>
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
            {hOME}
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
      <div style={{ padding: '2rem', marginTop: '80px' }}> {/* Add marginTop to avoid content being hidden under the fixed header */}
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>All Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post._id} post={post} />
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
