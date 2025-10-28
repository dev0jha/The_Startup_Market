import React from "react";

export default function StartupPreview({ startup }) {
  try {
    if (!startup) {
      return <div>Startup not found.</div>;
    }

    return (
      <div className="startup-preview">
        <h2>{startup.title || "No title"}</h2>
        {startup.image ? (
          <img src={startup.image} alt={startup.title || "No title"} style={{ maxWidth: "400px", borderRadius: "8px" }} />
        ) : (
          <div style={{ width: "400px", height: "200px", background: "#eee", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>No image</div>
        )}
        <p><strong>Category:</strong> {startup.category || "No category"}</p>
        <p><strong>Description:</strong> {startup.description || "No description"}</p>
        <div><strong>Pitch:</strong> <pre>{startup.pitch || "No pitch"}</pre></div>
        <p><strong>Views:</strong> {typeof startup.views === "number" ? startup.views : "N/A"}</p>
      </div>
    );
  } catch (err) {
    return <div className="text-red-500">Error rendering preview: {String(err)}</div>;
  }
}
