import { BiCode } from "react-icons/bi";
import SharedComponent from "./SharedComponent";
import { useEffect, useState } from "react";

const Seo = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevOpen) => (prevOpen % 6) + 1);
    }, 500);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <SharedComponent
      title={"SEO"}
      description={
        "Optimize your SEO and improve discoverability with fine-tuned controls, high-performance hosting, and flexible content management tools."
      }
      bottomText={"Read more"}
    >
      <div className="md:flex justify-between items-center">
        <p className="flex gap-2 items-center w-fit mt-10 p-2 rounded bg-dark cursor-pointer text-xl transition hover:shadow-success hover:shadow-2xl border border-success font-semibold">
          <BiCode className="text-xl" /> Code
        </p>
        <div
          className={`${
            index === 6
              ? "border-anim shadow-lg shadow-success/25"
              : "border border-dark3"
          } p-3 flex items-center justify-center w-fit rounded-md`}
        >
          <div
            className={`${
              index === 5
                ? "border-anim shadow-lg shadow-success/25"
                : "border border-dark3"
            } p-3 flex items-center justify-center w-fit rounded-md`}
          >
            <div
              className={`${
                index === 4
                  ? "border-anim shadow-lg shadow-success/25"
                  : "border border-dark3"
              } p-2 flex items-center justify-center w-fit rounded-md`}
            >
              <div
                className={`${
                  index === 3
                    ? "border-anim shadow-lg shadow-success/25"
                    : "border border-dark3"
                } p-4 flex items-center justify-center w-fit rounded-md`}
              >
                <div
                  className={`${
                    index === 2
                      ? "border-anim shadow-lg shadow-success/25"
                      : "border border-dark3"
                  } p-6 flex items-center justify-center w-fit rounded-md`}
                >
                  <div
                    className={`${
                      index === 1
                        ? "border-anim shadow-lg shadow-success/25"
                        : "border border-dark3"
                    } p-5 flex items-center justify-center w-fit rounded-md`}
                  >
                    <p className="shadow-md hover:shadow-lg hover:shadow-white/20 shadow-success border border-success inline-block text-xs py-2 px-2 md:px-6 rounded cursor-pointer">
                      Preview Open Graph
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SharedComponent>
  );
};

export default Seo;
