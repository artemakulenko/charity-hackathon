import { useParams } from "react-router-dom";

export const Game = () => {
  const { difficulty } = useParams();

  return (
    <div>
      <div>Difficulty is {difficulty} </div>
    </div>
  );
};
