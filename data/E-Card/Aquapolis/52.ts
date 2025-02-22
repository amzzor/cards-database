import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magneti"
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		81,
	],
	hp: 40,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Attract",
				fr: "Attraction"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it.",
				fr: "Choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
