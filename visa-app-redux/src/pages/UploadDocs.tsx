import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { update } from "../store/applicationSlice";

export default function UploadDocs() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((s) => s.application.data);
  const navigate = useNavigate();

  const [photoPreview, setPhotoPreview] = useState<string | null>(
    data.photo ? URL.createObjectURL(data.photo) : null
  );
  const [docName, setDocName] = useState<string>(data.document?.name || "");

  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      dispatch(update({ photo: file }));
      setPhotoPreview(URL.createObjectURL(file));
    }
  }

  function handleDoc(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      dispatch(update({ document: file }));
      setDocName(file.name);
    }
  }

  return (
    <div className="bg-white shadow rounded p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">Upload Documents</h2>

      <div>
        <label className="font-medium">Passport Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhoto}
          className="block mt-1"
        />
        {photoPreview && (
          <img
            src={photoPreview}
            alt="preview"
            className="w-32 mt-2 rounded shadow"
          />
        )}
      </div>

      <div>
        <label className="font-medium">Supporting Document (PDF)</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleDoc}
          className="block mt-1"
        />
        {docName && <p className="mt-1 text-gray-700">Selected: {docName}</p>}
      </div>

      <div className="mt-4">
        <button
          onClick={() => navigate("/review")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Next: Review
        </button>
      </div>
    </div>
  );
}
