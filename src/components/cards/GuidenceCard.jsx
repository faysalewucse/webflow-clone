import SharedComponent from "../../pages/homepage/platforms/SharedComponent";

const GuidenceCard = ({
  image,
  title,
  description,
  bottomText,
  bottomTextHandler,
}) => {
  return (
    <div className="text-black border p-5 h-[500px] rounded">
      <div className="h-52 group/item overflow-hidden mb-10">
        <img
          className="h-full w-full object-cover group-hover/item:scale-110 transition"
          src={image}
          alt="card_image"
        />
      </div>
      <SharedComponent
        bordered={false}
        title={title}
        description={description}
        bottomText={bottomText}
        bottomTextHandler={bottomTextHandler}
      />
    </div>
  );
};

export default GuidenceCard;
