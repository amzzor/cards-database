import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Magby",
		fr: "Magby"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 30,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sputter",
				fr: "Crachouilles"
			},
			effect: {
				en: "All Pokémon Powers stop working until the end of your next turn.",
				fr: "Tous les Pouvoirs Pokémon cessent de fonctionner jusqu'à la fin de votre prochain tour."
			},
			damage: 10,

		},
	],

	description: {
		fr: "Chaque fois qu'il respire, des braises ardentes tombent de sa bouche et de ses narines."
	}
}

export default card
