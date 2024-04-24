import React from "react";

export default function Certificate({preview, name}) {
  return (
    <>
      <img
        className="img-fluid"
        src={preview}
        alt={name + " image"}
      />
      <p>{name}</p>
    </>
  );
}
