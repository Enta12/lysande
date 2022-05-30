import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/layout";
import Login from "./pages/login/login";
import Pj from "./pages/pj/pj";
import AddPj from "./pages/pj/addPj";
import Calendar from "./pages/calendar/CalendarPage";
import MapPage from "./pages/MapPage";
import FightPage from "./pages/fight/FightPage";


function AppRoute() {
  return (
      <Router>
          <Routes>
              <Route path="/pj" element={<Layout><Pj /></Layout>} />
              <Route path="/pj/new" element={<Layout><AddPj /></Layout>} />
              <Route path="/calendar" element={<Layout><Calendar /></Layout>} />
              <Route path="/map" element={<Layout><MapPage /></Layout>} />
              <Route path="/" element={<Login />} />
              <Route path="/fight" element={<FightPage />} />
          </Routes>
      </Router>
  );
}

export default AppRoute;