import { useParams } from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";
import { shuffleCards, uniqueCardsArray } from "../../cards";

export const Game = () => {
	const { difficulty } = useParams();
	console.log(difficulty);

	const [cards, setCards] = useState(shuffleCards(uniqueCardsArray.slice(0, difficulty / 2).concat(uniqueCardsArray.slice(0, difficulty / 2))));

	const [openCards, setOpenCards] = useState([]);
	const [clearedCards, setClearedCards] = useState({});
	const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
	const [moves, setMoves] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [bestScore, setBestScore] = useState(JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY);
	const timeout = useRef(null);

	const disable = () => {
		setShouldDisableAllCards(true);
	};
	const enable = () => {
		setShouldDisableAllCards(false);
	};

	const checkCompletion = () => {
		if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
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
			setClearedCards(prev => ({ ...prev, [cards[first].type]: true }));
			setOpenCards([]);
			return;
		}
		// This is to flip the cards back after 500ms duration
		timeout.current = setTimeout(() => {
			setOpenCards([]);
		}, 500);
	};
	const handleCardClick = index => {
		if (openCards.length === 1) {
			setOpenCards(prev => [...prev, index]);
			setMoves(moves => moves + 1);
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
	const checkIsFlipped = index => {
		return openCards.includes(index);
	};

	const checkIsInactive = card => {
		return Boolean(clearedCards[card.type]);
	};

	const handleRestart = () => {
		setClearedCards({});
		setOpenCards([]);
		setShowModal(false);
		setMoves(0);
		setShouldDisableAllCards(false);
		// set a shuffled deck of cards
		setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
	};

	return (
		<div className="App">
			<header>
				<h3>Play the Flip card game</h3>
				<div>Select two cards with same content consequtively to make them vanish</div>
			</header>
			<div className="container">
				{cards.map((card, index) => {
					return <Card key={index} card={card} index={index} isDisabled={shouldDisableAllCards} isInactive={checkIsInactive(card)} isFlipped={checkIsFlipped(index)} onClick={handleCardClick} />;
				})}
			</div>
			<footer>
				<div className="score">
					<div className="moves">
						<span className="bold">Moves:</span> {moves}
					</div>
					{localStorage.getItem("bestScore") && (
						<div className="high-score">
							<span className="bold">Best Score:</span> {bestScore}
						</div>
					)}
				</div>
				<div className="restart">
					<button onClick={handleRestart} color="primary">
						Restart
					</button>
				</div>
			</footer>
			{/* <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!!! You completed the challenge
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog> */}
		</div>
	);
};
