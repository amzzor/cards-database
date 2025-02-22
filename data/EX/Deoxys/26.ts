import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Metallic Lift",
				fr: "Élévation métallique"
			},
			effect: {
				en: "If Skarmory has any Metal Energy attached to it, the Retreat Cost for Skarmory is 0.",
				fr: "Si Airmure possède une Énergie , son Coût de retraite est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spearhead",
				fr: "Meneur"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Metal",
				fr: "Heavy Métal"
			},
			effect: {
				en: "Flip a coin for each Metal Energy attached to Skarmory. This attack does 10 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie  attachée à Airmure. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires multipliés par le nombre de faces."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
