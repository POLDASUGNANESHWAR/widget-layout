// src/components/InfoWidget.js
import React, { useState } from 'react';

const InfoWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="widget info-widget">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </div>
        <div
          className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </div>
        <div
          className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'about' && <div>Content for About Me</div>}
        {activeTab === 'experiences' && <div>Content for Experiences</div>}
        {activeTab === 'recommended' && <div>Content for Recommended</div>}
      </div>
    </div>
  );
};

export default InfoWidget;
