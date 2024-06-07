import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Wm from "./pages/WaterManagement";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Subsidies from "./pages/Subsidies";
import Individuals from "./pages/Individuals";
import Industries from "./pages/Industries";
import Fertilizers from "./pages/Fertilizers";
import Profile from "./pages/Profile";
import Workers from "./pages/Workers";
import Dryzone from "./pages/Dryzone";
import Shopping from "./pages/Shopping";
import Schemes from "./pages/Schemes";
import AddPost from "./pages/post";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/signup":
        title = "Signup";
        metaDescription = "";
        break;
      case "/login":
        title = "login";
        metaDescription = "";
        break;
      case "/home":
        title = "Home";
        metaDescription = "";
        break;
      case "/schemes":
        title = "";
        metaDescription = "";
        break;
      case "/industries":
        title = "";
        metaDescription = "";
        break;
      case "/individuals":
        title = "";
        metaDescription = "";
        break;
      case "/subsidies":
        title = "";
        metaDescription = "";
        break;
      case "/dryzone":
        title = "";
        metaDescription = "";
        break;
      case "/water-management":
        title = "";
        metaDescription = "";
        break;
      case "/fertilizers":
        title = "";
        metaDescription = "";
        break;
      case "/shopping":
        title = "";
        metaDescription = "";
        break;
      case "/workers":
        title = "";
        metaDescription = "";
        break;
      case "/addpost":
        title = "Create Post";
        metaDescription = "Create a new post";
        break;
      default:
        title = "Agro-Com";
        metaDescription = "Default Description";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/individuals" element={<Individuals />} />
      <Route path="/wm" element={<Wm />} />
      <Route path="/fertilizers" element={<Fertilizers />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/subsidies" element={<Subsidies />} />
      <Route path="/dryzone" element={<Dryzone />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/workers" element={<Workers />} />
      <Route path="/addpost" element={<AddPost />} />
    </Routes>
  );
}

export default App;
