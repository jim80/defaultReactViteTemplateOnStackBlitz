import { useState } from "react";
import useFetch from "react-fetch-hook";
import Loading from "./Loading";
import Error from "./Error";
import DrawingsList from "./DrawingsList";
import DrawingCard from "./drawingCard";
import SearchForm from "./SearchForm";

const API_URL = "https://65ea11eec9bf92ae3d3b07d0.mockapi.io/api/v1/documents";

const InterviewComp = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [filteredDrawings, setFilteredDrawings] = useState([]);
  const { isLoading, data: drawingsArray, error } = useFetch(API_URL);

  let drawingsListSource =
    searchString == "" ? drawingsArray : filteredDrawings;

  const onSearch = (searchTerm) => {
    setSearchString(searchTerm);
    let filtered = getDrawingByTitleString(searchTerm);
    setFilteredDrawings(filtered);
  };

  const onDrawingsListItemClicked = (id) => {
    setCurrentDrawing(getDrawingFromDrawings(id));
  };

  const getDrawingByTitleString = (searchString) => {
    if (!drawingsArray) {
      return null;
    }
    return drawingsArray
      .filter((drawing) =>
        drawing.title.toLowerCase().includes(searchString.toLowerCase())
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  };

  const getDrawingFromDrawings = (id) => {
    if (!drawingsArray) {
      return null;
    }
    return drawingsArray.find((drawing) => drawing.id === id);
  };

  ////////////////////////////// Render /////////////////////////////////////

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (drawingsArray && drawingsArray.length === 0) {
    return (
      <div>
        <p>No drawings were returned by the server</p>
      </div>
    );
  }

  if (drawingsArray) {
    return (
      <>
        <p>Browse Drawings</p>
        <SearchForm onSearch={onSearch} />
        <DrawingsList
          onListItemClicked={onDrawingsListItemClicked}
          drawingsArray={drawingsListSource}
        ></DrawingsList>
        {currentDrawing !== null && <DrawingCard {...currentDrawing} />}
      </>
    );
  }
};
export default InterviewComp;
