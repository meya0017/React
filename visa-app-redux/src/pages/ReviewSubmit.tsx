import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { submitApplication, reset } from "../store/applicationSlice";

export default function ReviewSubmit() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, status, error, submittedResult } = useAppSelector(
    (s) => s.application
  );

  function handleSubmit() {
    dispatch(submitApplication(data));
  }

  function handleReset() {
    dispatch(reset());
    navigate("/");
  }

  return (
    <div className="bg-white shadow rounded p-6 flex flex-col gap-3">
      <h2 className="text-2xl font-semibold text-gray-800">Review & Submit</h2>

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

      {status === "loading" && <p className="text-gray-500">Submitting…</p>}
      {status === "failed" && <p className="text-red-500">{error}</p>}
      {status === "succeeded" && (
        <p className="text-green-600">{submittedResult?.message}</p>
      )}

      <div className="mt-4 flex gap-2">
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
