import React, { useState } from 'react';
// import './Tab.css'; // Import CSS file for styling

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    // <div className="tab_div mt-2">
      <div className="tabs px-1 justify-between">
        <div
          className={`tab_ ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Elections 2024
        </div>
        <div
          className={`tab_ ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Constituencies
        </div>
        <div
          className={`tab_ ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Politicians
        </div>
        <div
          className={`tab_ ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          Previous Polls
        </div>
       
      {/* </div> */}
      {/* <div className="underline " style={{margin:"0 0 0 0",  width:"14%" , left: `calc(${(activeTab - 1) * 28.6}% + ${(activeTab - 1) * .1}%)` }} /> */}
    </div>
  );
};

export default Tab;
