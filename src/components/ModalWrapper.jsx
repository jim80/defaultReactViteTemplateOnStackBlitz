import PropTypes from "prop-types";
let ModalWrapper = (props) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 bg-black flex justify-center items-center z-50">
      {props.children}
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default ModalWrapper;
