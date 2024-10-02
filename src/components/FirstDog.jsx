import useFetch from "react-fetch-hook";
import ImageViewer from './ImageViewer'

const FirstDog = () => {

    const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

    const { isLoading, data, error } = useFetch(RANDOM_DOG_URL);

    return (
        <>

        <button onClick={() => console.log("REFRESH DOG")}>
          Get another random dog
        </button>
        
        {isLoading ? <h1>"LOADING"</h1> : <ImageViewer srcUrl = {data.message}></ImageViewer>}
            
        </>
    )
}
export default FirstDog