import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Smoochum",
		fr: "Lippouti"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		238,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psykiss",
				fr: "Psy'bisou"
			},
			effect: {
				en: "Flip a coin. If heads, choose a Special Energy card attached to 1 of your opponent's Pokémon. Your opponent shuffles that card into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie Spéciale attachée à l'un des Pokémon de votre adversaire. Votre adversaire mélange ensuite cette carte à son deck."
			},

		},
	],

	description: {
		fr: "Il remue toujours la tête d'avant en arrière comme s'il essayait de faire des bisous."
	}
}

export default card
