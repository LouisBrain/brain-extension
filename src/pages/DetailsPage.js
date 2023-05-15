import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";

const DetailsPage = () => {
  const { id } = useParams();
  console.log(id)

  return <div className="relative">
    <div className="absolute w-screen h-screen z-0">
      <ReactPlayer
          url="https://storage.googleapis.com/cdnbrainsecurity/cybersensible/medias/background_brain_black.mp4"
          width="100%"
          height="100%"
          loop={true}
          playing={true}
          playsinline={true}
          muted={true}
      />
    </div>

    <div className="z-10">

    </div>
  </div>
}

export default DetailsPage