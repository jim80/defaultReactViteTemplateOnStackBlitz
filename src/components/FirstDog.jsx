import useFetch from "../hooks/useFetch"

import ImageViewer from './ImageViewer'

const FirstDog = () => {

    const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

    let { status, data } = useFetch (RANDOM_DOG_URL);

    return (
        <>
        <button onClick={() => console.log("REFRESH DOG")}>
          Get another random dog
        </button>
            <div><h2>{status}</h2></div>
            <ImageViewer srcUrl = {data.message}></ImageViewer>
        </>
    )
}
export default FirstDog