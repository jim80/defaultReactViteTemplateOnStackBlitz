import useFetch from "../hooks/useFetch"

const FirstDog = () => {
    
    const randomDogUrl = "https://dog.ceo/api/breeds/image/random";

   let { status, data } = useFetch(randomDogUrl);

    return(
        <>
        <p>I am a First Dog</p>
        <div><h2>{status}</h2></div>
        <div><h2>{data.message}</h2></div>
        <div><img src={data.message}/></div>
        </>
    )
}
export default FirstDog