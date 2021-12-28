import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../containers/pages/Home";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import PhoneNumberPage from "./pages/PhoneNumberPage";
import { getHistory } from "../utils";

class App extends Component {
  render() {
    return (
      <Router history={getHistory()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies/:companyId" element={<CompanyPage />} />
          <Route path="/numbers/:phoneNumberId" element={<PhoneNumberPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
