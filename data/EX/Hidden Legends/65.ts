import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Meditite",
		fr: "Meditikka"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		307,
	],
	hp: 50,
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
				en: "Double Chop",
				fr: "Double coup"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces."
			},
			damage: "10×",

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Calm Mind",
				fr: "Plénitude"
			},
			effect: {
				en: "Remove 2 damage counters from Meditite (remove 1 if there is only 1).",
				fr: "Retirez à Meditikka 2 marqueurs de dégât (ou 1 s'il n'y en a qu'1)."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
