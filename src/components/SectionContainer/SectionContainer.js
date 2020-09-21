import React from 'react';

import "./sectionContainer.css";

const SectionContainer = ({id, leftContent = () => {}, rightContent = () => {}, children, className, leftClassName, rightClassName}) => {
  return (
    <div id={id} className={`sectionContainer ${className}`}>
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
