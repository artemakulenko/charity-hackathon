import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const sendSubmit = (link) => {
    navigate(link);
  };

  return (
    <>
      <h1>this is home page</h1>
      <button onClick={() => sendSubmit(`/game/easy`)}>Easy</button>
      <button onClick={() => sendSubmit(`/game/medium`)}>Medium</button>
      <button onClick={() => sendSubmit(`/game/hard`)}>Hard</button>
    </>
  );
};
