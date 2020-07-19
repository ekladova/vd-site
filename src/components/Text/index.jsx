import React from "react";

const Text = ({ children }) => {
  return (
    <>
      <div className="text-description">
        <p>{children}</p>
      </div>
    </>
  );
};

export default Text;
