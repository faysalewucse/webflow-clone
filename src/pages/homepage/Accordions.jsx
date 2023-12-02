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

const Accordions = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="md:flex px-5 gap-10">
          <div className="md:w-1/2">
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

          <iframe
            src={video1}
            className="hidden md:block flex-1 h-[400px]"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Accordions;
