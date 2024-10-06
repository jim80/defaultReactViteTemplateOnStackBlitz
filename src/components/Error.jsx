import "../App.css";
import PropTypes from "prop-types";

const Error = (props) => {
  const { error } = props;
  return (
    <>
      <div data-testid="ErrorComponent" className="error-component">
        <h1>{"ERROR : Error status : " + error?.status}</h1>
      </div>
    </>
  );
};
Error.propTypes = {
  error: PropTypes.object.isRequired,
};
export default Error;
