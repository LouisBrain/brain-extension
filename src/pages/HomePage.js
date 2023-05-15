import gif01Fr from "../assets/brain_gif_reflex/fr/01.gif";
import gif02Fr from "../assets/brain_gif_reflex/fr/02.gif";
import gif03Fr from "../assets/brain_gif_reflex/fr/03.gif";
import gif04Fr from "../assets/brain_gif_reflex/fr/04.gif";
import gif05Fr from "../assets/brain_gif_reflex/fr/05.gif";
import gif06Fr from "../assets/brain_gif_reflex/fr/06.gif";
import gif07Fr from "../assets/brain_gif_reflex/fr/07.gif";
import gif08Fr from "../assets/brain_gif_reflex/fr/08.gif";
import gif09Fr from "../assets/brain_gif_reflex/fr/09.gif";
import gif10Fr from "../assets/brain_gif_reflex/fr/10.gif";
import gif11Fr from "../assets/brain_gif_reflex/fr/11.gif";
import gif12Fr from "../assets/brain_gif_reflex/fr/12.gif";
import gif13Fr from "../assets/brain_gif_reflex/fr/13.gif";
import gif14Fr from "../assets/brain_gif_reflex/fr/14.gif";
import gif15Fr from "../assets/brain_gif_reflex/fr/15.gif";
import gif16Fr from "../assets/brain_gif_reflex/fr/16.gif";
import gif17Fr from "../assets/brain_gif_reflex/fr/17.gif";
import gif18Fr from "../assets/brain_gif_reflex/fr/18.gif";
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    const gifTabFr = [
        gif01Fr,
        gif02Fr,
        gif03Fr,
        gif04Fr,
        gif05Fr,
        gif06Fr,
        gif07Fr,
        gif08Fr,
        gif09Fr,
        gif10Fr,
        gif11Fr,
        gif12Fr,
        gif13Fr,
        gif14Fr,
        gif15Fr,
        gif16Fr,
        gif17Fr,
        gif18Fr,
    ];

    const handleGifClick = (id) => {
        navigate(`/detail/${id}`);
    };


    return (
    <div className="relative">
        <div className="absolute w-screen h-screen z-0">
            <ReactPlayer
            url={process.env.PUBLIC_URL + "/videos/brainbg.mp4"}
            width="100%"
            height="100%"
            loop={true}
            playing={true}
            playsinline={true}
            muted={true}
        />
        </div>

     <div className="h-10 w-full bg-black fixed top-0 left-0 z-10"></div>
     <div className="flex justify-center items-center h-screen z-10">
         <div className="text-green-600 grid grid-cols-6 gap-4 z-10">
             {gifTabFr.map((gif, i) => {
                 return (
                     <button onClick={() => handleGifClick(i)} className="h-[170px] w-[140px]" key={i}>
                         <img className="" src={gif} alt="GIF" />
                     </button>
                 );
             })}
         </div>
     </div>
 </div> )
}

export default HomePage