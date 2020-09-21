import React from 'react';

import "./sectionContainer.css";

const SectionContainer = ({id, reverse = false, leftContent = () => {}, rightContent = () => {}, children, className, leftClassName, rightClassName}) => {
  return (
    <div id={id} className={`sectionContainer ${className}`} style={{
      flexDirection: reverse ? "row-reverse" : "row",
    }}>
      <div className={`sectionContainerContent ${leftClassName}`}>
        {leftContent()}
      </div>
      <div className={`sectionContainerContent ${rightClassName}`}>
        {rightContent()}
      </div>
      {children}
    </div>
  );
}

export default SectionContainer;
