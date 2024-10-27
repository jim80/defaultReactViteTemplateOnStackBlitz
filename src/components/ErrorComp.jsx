import "../App.css";
import PropTypes from "prop-types";

const ErrorComp = (props) => {
  const { error } = props;
  return (
    <>
      <div data-testid="ErrorComponent" className="error-component">
        <h1>{"ERROR : Error status : " + error?.status}</h1>
      </div>
    </>
  );
};
ErrorComp.propTypes = {
  error: PropTypes.object.isRequired,
};
export default ErrorComp;
