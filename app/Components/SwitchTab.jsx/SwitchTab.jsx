import React, { useState } from 'react';

function SwitchTab({ tab1, tab2 }) {
  const [activeTab, setActiveTab] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div >
      <div >
        <div  style={{display:"flex" ,justifyContent:"center"}}>
          <button
            className={`px-4 py-1 text-sm font-medium  ${activeTab ? ' text-white bg-blue-500' : 'text-gray-500 bg-gray-100'}`}
            onClick={() => handleTabClick(true)}
          >
           Loksabha
          </button>
          <button
            className={`px-4 py-1 text-sm font-medium focus:outline-none ${activeTab === false ? ' text-white bg-blue-500' : 'text-gray-500 bg-gray-100'}`}
            onClick={() => handleTabClick(false)}
          >
            Assembly
          </button>
        </div>
      </div>
      <>
        {activeTab ?
          tab1 : null
        }
        {activeTab === false ?
          tab2 : null
        }
      </>
    </div>

  );
}

export default SwitchTab;
