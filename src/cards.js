import familyTree from "./assets/images/family-tree.png";
import gift from "./assets/images/gift.png";
import goShopping from "./assets/images/go-shopping.png";
import holdingHands from "./assets/images/holding-hands.png";
import mother from "./assets/images/mother.png";
import mother1 from "./assets/images/mother-1.png";
import mother2 from "./assets/images/mother-2.png";
import photoFrame from "./assets/images/photo-frame.png";
import playing from "./assets/images/playing.png";
import socks from "./assets/images/socks.png";

export const uniqueCardsArray = [
	{ type: "familyTree", image: familyTree },
	{ type: "gift", image: gift },
	{ type: "goShopping", image: goShopping },
	{ type: "holdingHands", image: holdingHands },
	{ type: "mother", image: mother },
	{ type: "mother1", image: mother1 },
	{ type: "mother2", image: mother2 },
	{ type: "photoFrame", image: photoFrame },
	{ type: "playing", image: playing },
	{ type: "socks", image: socks },
];

export const cardsData = uniqueCardsArray.map(card => ({
	...card,
	isFlipped: false,
}));

export function shuffleCards(array) {
	const length = array.length;
	for (let i = length; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * i);
		const currentIndex = i - 1;
		const temp = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temp;
	}
	return array;
}
