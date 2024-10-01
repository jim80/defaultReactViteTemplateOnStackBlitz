import '../App.css';

const ImageViewer = (props) => {
    const {srcUrl} = (props)
    return (
        <>
            <div className="image-viewer-root"><img src={srcUrl} /></div>
        </>
    )
}
export default ImageViewer