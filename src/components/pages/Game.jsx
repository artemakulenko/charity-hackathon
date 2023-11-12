import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";
import Modal from "../UI/Modal/Modal";
import { Button } from "../UI/Button/Button";
import { shuffleCards, uniqueCardsArray } from "../../cards";
import { RotateCcw } from "lucide-react";

export const Game = () => {
  const { difficulty } = useParams();

  const [cards, setCards] = useState(
    shuffleCards(
      uniqueCardsArray
        .slice(0, difficulty / 2)
        .concat(uniqueCardsArray.slice(0, difficulty / 2))
    )
  );

  JSON.parse(localStorage.getItem("bestScore")) == 0 &&
    localStorage.removeItem("bestScore");

  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === difficulty / 2) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(
      shuffleCards(
        uniqueCardsArray
          .slice(0, difficulty / 2)
          .concat(uniqueCardsArray.slice(0, difficulty / 2))
      )
    );
  };

  function hadleModalClose() {
    setShowModal(false);
  }

  return (
    <div className="App">
      <div className="score-container">
        <div className="score">
          <div className="moves">
            <span className="bold">количество ходов:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">лучший результат:</span> {bestScore}
            </div>
          )}
        </div>
        <div className="restart" onClick={handleRestart}>
          <RotateCcw />
        </div>
      </div>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      {showModal && (
        <Modal onClose={hadleModalClose}>
          <h2>You WIN!</h2>
          <p>
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </p>
          <Button onClick={handleRestart} style="primary">
            Restart
          </Button>
        </Modal>
      )}
    </div>
  );
};
