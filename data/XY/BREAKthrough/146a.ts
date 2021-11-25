import { Card } from "../../../interfaces"
import Set from "../BREAKthrough"

const card: Card = {
	set: Set,

	name: {
		en: "Professor's Letter",
		fr: "Lettre du Professeur"
	},

	rarity: "None",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
		fr: "Cherchez jusqu'à 2 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
	},

	trainerType: "Item"
}

export default card