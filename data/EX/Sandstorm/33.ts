import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Shroomish",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Poison Breath",
				fr: "Super haleine empoisonnée"
			},
			effect: {
				en: "Each Defending Pokémon is now Poisoned.",
				fr: "Chaque Pokémon Défenseur est maintenant Empoisonné."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
				fr: "Stratopercut"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
