import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavbarComponent from "./components/NavbarComponent";
import ProfileComponent from "./components/ProfileComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import NotFoundComponent from "./components/NotFoundComponent";
import Welcome from "./components/welcome";
import { useState } from "react";
//import { useParams } from "react-router-dom";

export const API_KEY = localStorage.getItem("APY_KEY");
 
function App() {
  //const params = useParams();
  //const profile = useSelector((state) => state.data.profile);
  // const exp = useSelector((state) => state.data.exp);
  const dispatch = useDispatch();

  const fetchMyProfile = async () => {
    try {
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      });
      if (resp.ok) {
        let profile = await resp.json();
        dispatch({ type: "GET_PROFILE", payload: profile });
        console.log(profile);
        fetchExp(profile._id);
      } else {
        alert("errore nella chiamata (recupero profilo)");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExp = async (id) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      });
      if (response.ok) {
        let exp = await response.json();
        console.log(exp);
        dispatch({ type: "GET_EXPS", payload: exp });
      } else {
        alert("errore nella chiamata (recupero esperienze)");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllProfiles = async () => {
    try {
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile`, {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      });
      if (resp.ok) {
        let profiles = await resp.json();
        dispatch({ type: "GET_ALL_PROFILE", payload: profiles });
        console.log("Tutti i profili: ", profiles);
      } else {
        alert("errore nella chiamata (recupero TUTTIprofilI)");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyProfile();
    fetchAllProfiles();
    //console.log(profile);
    //console.log(exp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/home" element={<><NavbarComponent/><HomeComponent/></>}></Route>
          <Route path="/Profile" element={<><NavbarComponent></NavbarComponent><ProfileComponent/></>}></Route>
          <Route path="/Profile/:id" element={<><NavbarComponent/><ProfileComponent/></>}></Route>
          <Route path="/*" element={<NotFoundComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
