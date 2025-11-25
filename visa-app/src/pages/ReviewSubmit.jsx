import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewSubmit({ data, reset }) {
  const navigate = useNavigate();

  function handleSubmit() {
    console.log("Submitting application:", data);
    alert("Application submitted!");
    reset();
    navigate("/");
  }

  return (
    <div>
      <h2>Review & Submit</h2>

      <p>
        <strong>Full name:</strong> {data.fullName || "—"}
      </p>
      <p>
        <strong>Passport #:</strong> {data.passportNumber || "—"}
      </p>
      <p>
        <strong>Nationality:</strong> {data.nationality || "—"}
      </p>
      <p>
        <strong>Photo file:</strong>{" "}
        {data.photo ? data.photo.name : "Not uploaded"}
      </p>
      <p>
        <strong>Document file:</strong>{" "}
        {data.document ? data.document.name : "Not uploaded"}
      </p>

      <button onClick={handleSubmit}>Submit Application</button>
    </div>
  );
}
 