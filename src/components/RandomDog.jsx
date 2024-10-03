import useFetch from "react-fetch-hook";
import ImageViewer from "./ImageViewer";
import Loading from "./Loading";
import Error from "./Error";
import useCounter from "../hooks/useCounter";

const RandomDog = () => {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

  const { count: counterCount, add: counterAdd } = useCounter(1);

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
        return <ImageViewer srcUrl={data.message} />;
      }
    }
  };

  return (
    <>
      <button onClick={() => counterAdd()}>Get another random dog</button>
      {getMainContent()}
    </>
  );
};
export default RandomDog;
