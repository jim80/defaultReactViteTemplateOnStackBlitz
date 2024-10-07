/* eslint-disable react/no-unknown-property */
import "../App.css";

const Loading = () => {
  return (
    <>
      <div data-testid="loadingComponent" className="loading-component">
        <svg
          className="loader"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            strokeWidth="8"
            stroke="#3498db"
          />
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            strokeWidth="8"
            stroke="#3498db"
            strokeDasharray="240"
            strokeDashoffset="0"
            animation="spin 2s linear infinite"
          />
        </svg>
        <p>Loading...</p>
      </div>
    </>
  );
};
export default Loading;
