import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Numel",
		fr: "Chamallot de Team Magma"
	},
	illustrator: "Katsura Tabata",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		322,
	],
	hp: 50,
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
				en: "Collect",
				fr: "Collectionner"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
