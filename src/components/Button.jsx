const Button = ({ text, className, size }) => {
  return (
    <div
      className={`bg-primary hover:bg-primary2 cursor-pointer transition w-fit ${
        size === "large" ? "py-4 px-8 text-lg" : "text-sm py-3 px-6"
      } rounded font-semibold text-center ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
