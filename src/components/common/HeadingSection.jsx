import React from "react";

const HeadingSection = ({ firstTitle, secondTitle }) => {
  return (
    <>
      <div className="heading-section">
        <h4>
          <em>{firstTitle}</em> {secondTitle}
        </h4>
      </div>
    </>
  );
};

export default HeadingSection;
