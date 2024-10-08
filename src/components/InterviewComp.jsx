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
  const { isLoading, data: drawingsArray, error } = useFetch(API_URL);

  const onSearch = (searchTerm) => {
    console.log(searchTerm);
    // setCurrentDrawing(getDrawingFromDrawingsArray(searchTerm));
  };

  const onDrawingsListItemClicked = (id) => {
    setCurrentDrawing(getDrawingFromDrawingsArray(id));
  };

  const getDrawingFromDrawingsArray = (id) => {
    if (!drawingsArray) {
      return null;
    }
    return drawingsArray.find((drawing) => drawing.id === id);
  };

  let GetDrawingsComponent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />;
    }

    if (drawingsArray) {
      return (
        <>
          <SearchForm onSearch={onSearch} />
          <DrawingsList
            onListItemClicked={onDrawingsListItemClicked}
            drawingsArray={drawingsArray}
          ></DrawingsList>
        </>
      );
    }
  };

  return (
    <>
      <h1>Browse Drawings</h1>
      {GetDrawingsComponent()}
      {currentDrawing && <DrawingCard {...currentDrawing} />}
    </>
  );
};
export default InterviewComp;
