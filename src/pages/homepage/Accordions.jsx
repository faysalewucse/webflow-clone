import Accordion from "../../components/cards/AccordionCard";
import { HiOutlineCursorClick } from "react-icons/hi";
import { TbDroplets } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { BiData } from "react-icons/bi";
import Container from "../../components/Container";
import video1 from "../../assets/videos/wf_features-1d.webm";
import acc1 from "../../assets/accordions/acc1.webp";
import acc2 from "../../assets/accordions/acc2.webp";
import acc3 from "../../assets/accordions/acc3.webp";
import acc4 from "../../assets/accordions/acc4.webp";
import acc5 from "../../assets/accordions/acc5.webp";
import { useRef, useState } from "react";
import { MdPauseCircleOutline, MdPlayCircleOutline } from "react-icons/md";

const Accordions = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="my-10">
      <Container>
        <div className="md:flex px-5 gap-10">
          <div className="md:w-[35%]">
            <Accordion
              image={acc1}
              icon={<HiOutlineCursorClick />}
              title="Fully customized page structure"
              content="lorem ipsum dolor sit amet, consectetur adip ex ea commodo consequ nonum lorem"
              index={1}
            />
            <Accordion
              image={acc2}
              icon={<TbDroplets />}
              title="Style your site exactly how you want"
              content="lorem ipsum dolor sit amet, consectetur adip ex ea commodo consequ nonum lorem"
              index={2}
            />
            <Accordion
              image={acc3}
              icon={<AiOutlineThunderbolt />}
              title="Create complex, rich animation"
              content="lorem ipsum dolor sit amet, consectetur adip ex ea commodo consequ nonum lorem"
              index={3}
            />
            <Accordion
              image={acc4}
              icon={<BiData />}
              title="Create content-rich pages"
              content="lorem ipsum dolor sit amet, consectetur adip ex ea commodo consequ nonum lorem"
              index={4}
            />
            <Accordion
              image={acc5}
              icon={<IoLogOutOutline />}
              title="Go live quickly"
              content="lorem ipsum dolor sit amet, consectetur adip ex ea commodo consequ nonum lorem"
              index={5}
            />
          </div>

          <div className="flex-1 relative hidden md:block">
            <video ref={videoRef} autoPlay loop muted onClick={handlePlayPause}>
              <source src={video1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-10 left-10 text-white text-4xl">
              {!isPlaying ? <MdPlayCircleOutline /> : <MdPauseCircleOutline />}
            </div>
            <div className="absolute left-14 bottom-32 w-80 h-24 bg-black"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Accordions;
