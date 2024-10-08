import "../App.css";
import PropTypes from "prop-types";

const DrawingsListItem = (props) => {
  const { id, title, description, onListItemClicked } = props;
  const click = () => {
    onListItemClicked(id);
  };
  return (
    <>
      <div onClick={click}>
        <div>{"title : " + title}</div>
        <div>{"description : " + description}</div>
      </div>{" "}
    </>
  );
};

DrawingsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onListItemClicked: PropTypes.func.isRequired,
};

export default DrawingsListItem;
