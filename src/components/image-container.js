import React from "react";

export default function ImageContainer({ children }) {
  return (
    <div>
      <img style={{ width: "100%" }} src={{ children }} />
    </div>
  );
}
