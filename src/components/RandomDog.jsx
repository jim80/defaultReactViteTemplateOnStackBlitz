import useFetch from "react-fetch-hook";
import ImageViewer from './ImageViewer'
import Loading from './Loading'
import Error from './Error'

const RandomDog = () => {

    const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

    const { isLoading, data, error } = useFetch(RANDOM_DOG_URL);

    let getMainContent = () => {
      if (error) {
       return  <Error error= {error} />
      }
      else
      {
        if (isLoading){
          return <Loading />
        }
        else{
          return <ImageViewer srcUrl = {data.message} />
        }

      }
    }

    return (
        <>

        <button onClick={() => console.log("REFRESH DOG")}>
          Get another random dog
        </button>

        {getMainContent()}
        
        {/* {isLoading ? <h1>"LOADING"</h1> : <ImageViewer srcUrl = {data.message}></ImageViewer>} */}
            
        </>
    )
}
export default RandomDog