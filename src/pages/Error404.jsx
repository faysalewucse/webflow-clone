import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      Erro 404
      <Link to={"/"}>GO to Home</Link>
    </div>
  );
}
