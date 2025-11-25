import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { update } from "../store/applicationSlice";

export default function ApplicantInfo() {
  const dispatch = useAppDispatch();
  const existing = useAppSelector((s) => s.application.data);
  const navigate = useNavigate();

  const [local, setLocal] = useState({
    fullName: existing.fullName || "",
    passportNumber: existing.passportNumber || "",
    nationality: existing.nationality || "",
  });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocal((l) => ({ ...l, [e.target.name]: e.target.value }));
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (!local.fullName || !local.passportNumber) {
      setError("Please fill name and passport number.");
      return;
    }
    dispatch(update(local));
    navigate("/upload");
  }

  return (
    <form
      onSubmit={handleNext}
      className="bg-white shadow rounded p-6 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Applicant Info</h2>
      {error && <p className="text-red-500">{error}</p>}

      <label className="font-medium">Full name</label>
      <input
        name="fullName"
        value={local.fullName}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <label className="font-medium">Passport number</label>
      <input
        name="passportNumber"
        value={local.passportNumber}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <label className="font-medium">Nationality</label>
      <input
        name="nationality"
        value={local.nationality}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Next: Upload Docs
      </button>
    </form>
  );
}
