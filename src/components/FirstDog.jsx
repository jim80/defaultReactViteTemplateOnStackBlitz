//import useFetch from "../hooks/useFetch"

const FirstDog = () => {
    
    const randomDogUrl = "https://dog.ceo/api/breeds/image/random";

   // let test = useFetch("randomDogUrl");

    return(
        <>
        <p>I am a First Dog</p>
        <div><h2>WOOF</h2></div>
        </>
    )
}
export default FirstDog