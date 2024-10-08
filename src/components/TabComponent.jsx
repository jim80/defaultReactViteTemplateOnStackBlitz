import { useState } from "react";
import "../App.css";
import RandomDog from "./RandomDog";
import InterviewComp from "./InterviewComp";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <ul className="tab-list">
        <li
          className={activeTab === 0 ? "tab active" : "tab"}
          onClick={() => handleTabClick(0)}
        >
          Dogs API
        </li>
        <li
          className={activeTab === 1 ? "tab active" : "tab"}
          onClick={() => handleTabClick(1)}
        >
          OREVTA
        </li>
        <li
          className={activeTab === 2 ? "tab active" : "tab"}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 0 && <TabContent1 />}
        {activeTab === 1 && <TabContent2 />}
        {activeTab === 2 && <TabContent3 />}
      </div>
    </div>
  );
};

const TabContent1 = () => <RandomDog></RandomDog>;
const TabContent2 = () => <InterviewComp />;
const TabContent3 = () => <h2>Tab 3 Content</h2>;

export default TabComponent;
