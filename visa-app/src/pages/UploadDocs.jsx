import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadDocs({ data, update }) {
  const [photoPreview, setPhotoPreview] = useState(
    data.photo ? URL.createObjectURL(data.photo) : null
  );
  const [docName, setDocName] = useState(data.document?.name || "");
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  function handlePhoto(e) {
    const file = e.target.files?.[0];
    if (file) {
      update({ photo: file });
      setPhotoPreview(URL.createObjectURL(file));
    }
  }

  function handleDoc(e) {
    const file = e.target.files?.[0];
    if (file) {
      update({ document: file });
      setDocName(file.name);
    }
  }

  return (
    <div>
      <h2>Upload Documents</h2>

      <label>Passport photo</label>
      <input type="file" accept="image/*" onChange={handlePhoto} />
      {photoPreview && (
        <img src={photoPreview} alt="preview" style={{ width: 120 }} />
      )}

      <label>Supporting document (pdf)</label>
      <input type="file" accept="application/pdf" onChange={handleDoc} />
      {docName && <p>Selected: {docName}</p>}

      <button onClick={() => navigate("/review")} style={{ marginTop: 16 }}>
        Next: Review
      </button>
    </div>
  );
}
