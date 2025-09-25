import { FaStar } from "react-icons/fa"; 
// Ícone de estrela

export function AvaliatorStars({
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
          // Estrela cheia
        } else {
          res.push(<FaStar key={i} size={size} color={negative} />); 
          // Estrela vazia
        }
      }
      return res;
    } else {
      throw Error("A quantidade tem que ser maior ou igual a avaliacao"); 
      // Validação
    }
  }

  return (
    <div>
      <span>{generate()}</span> 
      {/* Estrelas */}
      <span>{title}</span> 
      {/* Título da avaliação */}
    </div>
  );
}
