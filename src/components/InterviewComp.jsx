import { useState, useMemo } from "react";
import useFetch from "react-fetch-hook";
import Loading from "./Loading";
import Error from "./Error";
import DrawingsList from "./DrawingsList";
import DrawingCard from "./drawingCard";
import SearchForm from "./SearchForm";
import { API_URL } from "../constants/constants";

const InterviewComp = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [filteredDrawings, setFilteredDrawings] = useState([]);
  const { isLoading, data: drawingsArray, error } = useFetch(API_URL);

  useMemo(() => {
    const filterDrawingsByTitleString = (searchString) => {
      if (!drawingsArray) {
        return null;
      }
      return drawingsArray.filter((drawing) =>
        drawing.title.toLowerCase().includes(searchString.toLowerCase())
      );
    };
    setFilteredDrawings(filterDrawingsByTitleString(searchString));
  }, [searchString, drawingsArray]);

  const onSearch = (searchTerm) => {
    setSearchString(searchTerm);
  };

  const onDrawingsListItemClicked = (id) => {
    setCurrentDrawing(getDrawingFromDrawings(id));
  };

  const getDrawingFromDrawings = (id) => {
    if (!drawingsArray) {
      return null;
    }
    return drawingsArray.find((drawing) => drawing.id === id);
  };
  const clearCurrentDrawing = () => {
    setCurrentDrawing(null);
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
          drawingsArray={filteredDrawings}
        ></DrawingsList>
        {currentDrawing !== null && (
          <DrawingCard
            {...currentDrawing}
            closeButtonClicked={clearCurrentDrawing}
          />
        )}
      </>
    );
  }
};
export default InterviewComp;
