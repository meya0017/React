import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ApplicantInfo from "./pages/ApplicantInfo";
import UploadDocs from "./pages/UploadDocs";
import ReviewSubmit from "./pages/ReviewSubmit";
import PassportInfo from "./pages/PassportFormPage";

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow p-4 flex gap-4">
        <Link className="text-blue-600 hover:underline" to="/">
          Home
        </Link>
        <Link className="text-blue-600 hover:underline" to="/_passport">
          Apply Passport
        </Link> 

        <Link className="text-blue-600 hover:underline" to="/applicant">
          Apply Visa 
        </Link>
        <Link className="text-blue-600 hover:underline" to="/upload">
          Upload Docs
        </Link>
        <Link className="text-blue-600 hover:underline" to="/review">
          Review & Submit
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/_passport" element={<PassportInfo/>} />
          <Route path="/applicant" element={<ApplicantInfo />} />
          <Route path="/upload" element={<UploadDocs />} />
          <Route path="/review" element={<ReviewSubmit />} />
        </Routes>
      </main>
    </div>
  );
}
