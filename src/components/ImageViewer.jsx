import "../App.css";
import PropTypes from "prop-types";

const ImageViewer = (props) => {
  const { srcUrl } = props;
  return (
    <>
      <div className="image-container">
        <img src={srcUrl} />
      </div>
    </>
  );
};
ImageViewer.propTypes = {
  srcUrl: PropTypes.string.isRequired,
};

ImageViewer.defaultProps = {
  srcUrl: "",
};
export default ImageViewer;
