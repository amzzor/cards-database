import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "PokéNav",
		fr: "PokéNav"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Regardez les 3 cartes du dessus de votre deck et choisissez un Pokémon de base, une carte Évolution ou une carte Énergie. Montrez-la à votre adversaire et placez-la dans votre main. Replacez les 2 autres cartes au dessus de votre deck dans n'importe quel ordre."
	}
}

export default card
