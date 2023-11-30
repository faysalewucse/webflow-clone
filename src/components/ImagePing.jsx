const ImagePing = ({ image, position, scaleAnimation }) => {
  return (
    <div className={`group/item absolute ${position}`}>
      <div className="mx-auto relative h-28 w-28">
        <div className="border border-primary h-28 w-28 rounded-md animate-ping "></div>
        <img
          className={`${
            scaleAnimation && "hover:p-0 hover:scale-110"
          } p-3 absolute top-0 w-28 rounded-lg transition border border-primary`}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImagePing;
