import { useEffect, useState } from "react";

const Accordion = ({ image, icon, title, content, index }) => {
  const [open, setOpen] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((prevOpen) => (prevOpen % 5) + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <div
      className={`${
        index === open ? "opacity-100 bg-dark3" : "opacity-50"
      } text-white h-fit transition-all duration-700 rounded md:mb-0 mb-10`}
    >
      <img className="md:hidden" src={image} alt="" />
      <div>
        <div className="flex gap-3 px-3 py-5">
          <i className={index === open && "text-primary"}>{icon}</i>
          <div>
            <h1 className="-mt-1 mb-5 text-md font-semibold">{title}</h1>
            {index === open && (
              <p className="hidden md:block text-sm mb-2">{content}</p>
            )}
            <p className="md:hidden text-sm mb-2">{content}</p>
          </div>
        </div>
      </div>
      {index === open && (
        <div className="hidden md:block progress-anim h-[1px] bg-gradient-to-r from-primary/5 to-primary"></div>
      )}
    </div>
  );
};

export default Accordion;
