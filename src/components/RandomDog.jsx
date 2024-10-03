import useFetch from "react-fetch-hook";
import ImageViewer from "./ImageViewer";
import Loading from "./Loading";
import Error from "./Error";
import useCounter from "../hooks/useCounter";

/**
 * This component fetches a random dog image from the Dogs API.
 * It returns a button that says "Get another random dog" or "Get a random dog"
 * depending on whether the user has already clicked the button.
 * If the user clicks the button, it fetches a new image and displays it.
 * If there's an error, it displays an error component.
 * If the API is not available, it displays a message saying so.
 * If the API returns an image, it displays an image viewer component.
 */

const RandomDog = () => {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

  const { count: counterCount, add: counterAdd } = useCounter(0);

  const { isLoading, data, error } = useFetch(RANDOM_DOG_URL, {
    depends: [counterCount],
  });

  let getMainContent = () => {
    if (error) {
      return <Error error={error} />;
    } else {
      if (isLoading) {
        return <Loading />;
      } else {
        if (data && data.success === false) {
          return <div>The Dogs API reported an error</div>;
        } else {
          if (data && data.message) {
            return <ImageViewer srcUrl={data.message} />;
          }
        }
      }
    }
  };

  let buttonMessage = "Get another random dog";
  if (counterCount === 0) {
    buttonMessage = "Get a random dog";
  }

  return (
    <>
      <button className="get-random-dog-button" onClick={() => counterAdd()}>
        {buttonMessage}
      </button>
      {getMainContent()}
    </>
  );
};
export default RandomDog;
