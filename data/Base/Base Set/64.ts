import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Staryu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Recover",
				fr: "Soin"
			},
			effect: {
				en: "Discard 1 Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie.",
				fr: "Défaussez 1 carte Énergie  attachée à Staross pour pouvoir utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Staross."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Star Freeze",
				fr: "Étoile gelante"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Son cœur brille des couleurs de l'arc-en-ciel. On raconte que c'est une pierre précieuse."
	}
}

export default card
