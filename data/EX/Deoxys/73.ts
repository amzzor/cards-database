import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool"
	},
	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		287,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Yawn",
				fr: "Baillement"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Slakoth.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Parecool."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
