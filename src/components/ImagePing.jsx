const ImagePing = ({
  image,
  position,
  scaleAnimation = true,
  borderColor,
  extraStyle,
}) => {
  return (
    <div className={`group/item absolute ${position}`}>
      <div className="mx-auto relative md:h-32 md:w-32 h-10 w-10">
        <div
          style={{ borderColor: borderColor }}
          className={`border md:h-32 h-10 md:w-32 w-10 rounded-md ${
            scaleAnimation && "animate-ping"
          }`}
        ></div>
        <img
          style={{
            borderColor: borderColor,
          }}
          className={`${
            scaleAnimation && "hover:p-0 hover:scale-110"
          } p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 rounded-lg transition border ${extraStyle}`}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImagePing;
