import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Abra",
		fr: "Abra"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		63,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Vanish",
				fr: "Disparition"
			},
			effect: {
				en: "Shuffle Abra into your deck. (Discard all cards attached to Abra.)",
				fr: "Mélangez Abra avec votre deck. (Défaussez toutes les cartes attachées à Abra.)"
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psychique"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il se téléporte hors du danger, rendant sa capture difficile."
	}
}

export default card
