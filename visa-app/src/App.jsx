import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ApplicantInfo from "./pages/ApplicantInfo";
import UploadDocs from "./pages/UploadDocs";
import ReviewSubmit from "./pages/ReviewSubmit";

export default function App() {
  const [data, setData] = useState({
    fullName: "",
    passportNumber: "",
    nationality: "",
    photo: null,
    document: null,
  });

  function update(partial) {
    setData((d) => ({ ...d, ...partial }));
  }

  function reset() {
    setData({
      fullName: "",
      passportNumber: "",
      nationality: "",
      photo: null,
      document: null,
    });
  }

  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/applicant" style={{ marginRight: 10 }}>
          Applicant Info
        </Link>
        <Link to="/upload" style={{ marginRight: 10 }}>
          Upload Docs
        </Link>
        <Link to="/review">Review</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/applicant"
          element={<ApplicantInfo data={data} update={update} />}
        />
        <Route
          path="/upload"
          element={<UploadDocs data={data} update={update} />}
        />
        <Route
          path="/review"
          element={<ReviewSubmit data={data} reset={reset} />}
        />
      </Routes>
    </div>
  );
}
