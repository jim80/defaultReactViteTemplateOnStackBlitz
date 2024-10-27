import PropTypes from "prop-types";
//  a ModalWrapper that displays its children in a fixed position full screen overlay
// with a black semi-transparent background.
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
