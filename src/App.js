import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarComponent from "./components/NavbarComponent";
import ProfileComponent from "./components/ProfileComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import NotFoundComponent from "./components/NotFoundComponent";
//import { useParams } from "react-router-dom";

export const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjc2ZTE4NmE4NzAwMTQzODY3YzIiLCJpYXQiOjE2ODE3MTcxMDMsImV4cCI6MTY4MjkyNjcwM30.WhoGuX5E4a9cAnSoZgHW7QkdyUl7K5ySRV2ZNAZoUzY ";

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

  useEffect(() => {
    fetchMyProfile();
    //console.log(profile);
    //console.log(exp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/Profile" element={<ProfileComponent></ProfileComponent>}></Route>
          <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
          <Route path="/*" element={<NotFoundComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
