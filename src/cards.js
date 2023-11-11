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

const cards = [
	{ id: 1, name: "familyTree", image: familyTree },
	{ id: 2, name: "familyTree", image: familyTree },

	{ id: 3, name: "gift", image: gift },
	{ id: 4, name: "gift", image: gift },

	{ id: 5, name: "goShopping", image: goShopping },
	{ id: 6, name: "goShopping", image: goShopping },

	{ id: 7, name: "holdingHands", image: holdingHands },
	{ id: 8, name: "holdingHands", image: holdingHands },

	{ id: 9, name: "mother", image: mother },
	{ id: 10, name: "mother", image: mother },

	{ id: 11, name: "mother1", image: mother1 },
	{ id: 12, name: "mother1", image: mother1 },

	{ id: 13, name: "mother2", image: mother2 },
	{ id: 14, name: "mother2", image: mother2 },

	{ id: 15, name: "photoFrame", image: photoFrame },
	{ id: 16, name: "photoFrame", image: photoFrame },

	{ id: 17, name: "playing", image: playing },
	{ id: 18, name: "playing", image: playing },

	{ id: 19, name: "socks", image: socks },
	{ id: 20, name: "socks", image: socks },
];

export const cardsData = cards.map(card => ({
	...card,
	order: Math.floor(Math.random() * 20),
	isFlipped: false,
}));
