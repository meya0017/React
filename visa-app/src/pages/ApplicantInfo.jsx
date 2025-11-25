import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicantInfo({ data, update }) {
  const [local, setLocal] = useState({
    fullName: data.fullName || "",
    passportNumber: data.passportNumber || "",
    nationality: data.nationality || "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setLocal((l) => ({ ...l, [e.target.name]: e.target.value }));
  }

  function handleNext(e) {
    e.preventDefault();
    if (!local.fullName || !local.passportNumber) {
      setError("Please fill name and passport number.");
      return;
    }
    update(local);
    navigate("/upload");
  }

  return (
    <form onSubmit={handleNext}>
      <h2>Applicant Info</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>Full name</label>
      <input name="fullName" value={local.fullName} onChange={handleChange} />

      <label>Passport number</label>
      <input
        name="passportNumber"
        value={local.passportNumber}
        onChange={handleChange}
      />

      <label>Nationality</label>
      <input
        name="nationality"
        value={local.nationality}
        onChange={handleChange}
      />

      <button type="submit">Next: Upload Docs</button>
    </form>
  );
}
