import Container from "../UI/Container/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../UI/Button/Button";
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const [numOfDivs, setNumOfDivs] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  const numDivsHandler = (event) => {
    const array = [];
    let quantity = event.currentTarget.value;
    for (let i = 0; i < quantity; i++) {
      array.push(i);
    }

    setNumOfDivs(array);
  };

  const sendSubmit = (link) => {
    navigate(link);
  };

  return (
    <Container>
      <h1>Выберете сложность</h1>
      <div className={styles.wrapper}>
        <div className={styles.actions}>
          <Button
            value={12}
            style="primary"
            onClick={(event) => numDivsHandler(event)}
          >
            Easy
          </Button>
          <Button
            value={16}
            style="primary"
            onClick={(event) => numDivsHandler(event)}
          >
            Medium
          </Button>
          <Button
            value={20}
            style="primary"
            onClick={(event) => numDivsHandler(event)}
          >
            Hard
          </Button>
          <Button
            type="button"
            style="action"
            onClick={() => sendSubmit(`/charity-hackathon/game/${numOfDivs.length}`)}
          >
            Играть
          </Button>
        </div>

        <div
          className={`
            ${styles.grid} 
            ${numOfDivs.length === 12 && styles.easy} 
            ${numOfDivs.length === 16 && styles.medium} 
            ${numOfDivs.length === 20 && styles.hard}`}
        >
          {numOfDivs.map((el) => (
            <div key={el}></div>
          ))}
        </div>
      </div>
    </Container>
  );
};
