const Button = ({ text, className }) => {
  return (
    <div
      className={`bg-primary hover:bg-primary2 cursor-pointer transition w-fit py-3 px-6 rounded text-sm font-semibold text-center ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
