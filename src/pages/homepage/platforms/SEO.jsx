import SharedComponent from "./SharedComponent";

const Seo = () => {
  return (
    <SharedComponent
      title={"SEO"}
      description={
        "Optimize your SEO and improve discoverability with fine-tuned controls, high-performance hosting, and flexible content management tools."
      }
      bottomText={"Read more"}
    >
      <div>
        <p className="w-fit mt-10 p-2 rounded bg-dark cursor-pointer text-xl transition hover:shadow-success hover:shadow-2xl border border-success font-semibold">
          {"</>"} Code
        </p>
      </div>
    </SharedComponent>
  );
};

export default Seo;
