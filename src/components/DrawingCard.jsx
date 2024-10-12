import PropTypes from "prop-types";

const DrawingCard = ({
  title,
  description,
  project,
  category,
  uploader,
  uploaded_date,
  file_url,
  closeButtonClicked,
}) => {
  const buttonClicked = (event) => {
    event.preventDefault();
    closeButtonClicked();
  };
  return (
    <div className="card w-4/5">
      <button
        className="btn btn-sm btn-error float-right text-black md:hidden"
        onClick={buttonClicked}
      >
        X
      </button>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-detail">
        <span className="card-label">Project:</span> {project}
      </p>
      <p className="card-detail">
        <span className="card-label">Category:</span> {category}
      </p>
      <p className="card-detail">
        <span className="card-label">Uploaded by:</span> {uploader}
      </p>
      <p className="card-detail">
        <span className="card-label">Uploaded on:</span> {uploaded_date}
      </p>
      <p className="card-detail">
        <span className="card-label">File URL:</span>{" "}
        <a href={file_url}>{file_url}</a>
      </p>
    </div>
  );
};

DrawingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  uploader: PropTypes.string.isRequired,
  uploaded_date: PropTypes.string.isRequired,
  file_url: PropTypes.string.isRequired,
  closeButtonClicked: PropTypes.func.isRequired,
};

export default DrawingCard;
