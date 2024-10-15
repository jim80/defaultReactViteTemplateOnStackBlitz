import "../App.css";
import PropTypes from "prop-types";
import DrawingsListItem from "./DrawingsListItem";

const DrawingsList = (props) => {
  const { drawingsArray, onListItemClicked } = props;

  return (
    <>
      {drawingsArray.map((drawing) => (
        <DrawingsListItem
          onListItemClicked={onListItemClicked}
          key={drawing.id}
          {...drawing}
        />
      ))}
    </>
  );
};

DrawingsList.propTypes = {
  drawingsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onListItemClicked: PropTypes.func.isRequired,
};

export default DrawingsList;
