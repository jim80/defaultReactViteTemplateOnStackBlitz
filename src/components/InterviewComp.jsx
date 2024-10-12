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
  const [modalShowing, setModalShowing] = useState(false);
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
    setModalShowing(true);
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

  const onCloseModal = () => {
    setModalShowing(false);
    //clearCurrentDrawing();
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
        <div className="flex flex-col md:flex-row">
          <div>
            <SearchForm onSearch={onSearch} />
            <DrawingsList
              onListItemClicked={onDrawingsListItemClicked}
              drawingsArray={filteredDrawings}
            ></DrawingsList>
          </div>
          <div className="hidden md:block w:1/2">
            <DrawingCard
              {...currentDrawing}
              closeButtonClicked={onCloseModal}
            />
          </div>
        </div>
        {modalShowing && currentDrawing && (
          <div className="fixed inset-0 bg-opacity-50 bg-black flex justify-center items-center md:hidden">
            <DrawingCard
              {...currentDrawing}
              closeButtonClicked={onCloseModal}
            />
          </div>
        )}
      </>
    );
  }
};
export default InterviewComp;
