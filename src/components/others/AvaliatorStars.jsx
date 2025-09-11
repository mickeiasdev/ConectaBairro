import { FaStar } from "react-icons/fa";

export default function AvaliatorStars({
  size,
  rating,
  amount,
  positive,
  negative,
  title,
}) {
  function generate() {
    const res = [];
    if (rating <= amount) {
      for (let i = 0; i < amount; i++) {
        if (i < rating) {
          res.push(<FaStar key={i} size={size} color={positive} />);
        } else {
          res.push(<FaStar key={i} size={size} color={negative} />);
        }
      }
      return res;
    } else {
      throw Error("A quantidade tem que ser maior ou igual a avaliacao");
    }
  }

  return (
    <div>
      <span>{generate()}</span>
      <span>{title}</span>
    </div>
  );
}
