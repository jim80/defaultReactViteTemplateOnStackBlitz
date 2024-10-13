import "../App.css";
import PropTypes from "prop-types";
import DrawingsListItem from "./DrawingsListItem";

const DrawingsList = (props) => {
  const { drawingsArray, onListItemClicked } = props;

  /* const scrollableStyle = {
    overflowY: "scroll",
    maxHeight: "100vh",
  }; */

  return (
    <>
      <div /* style={scrollableStyle} */>
        {drawingsArray.map((drawing) => (
          <DrawingsListItem
            onListItemClicked={onListItemClicked}
            key={drawing.id}
            {...drawing}
          />
        ))}
      </div>
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
