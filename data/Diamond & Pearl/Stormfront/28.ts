import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Outbreak Power",
				fr: "Éruption de pouvoir",
			},
			effect: {
				en: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Steelix. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez autant de Pokémon de votre adversaire qu'il y a d'Énergie attachée à Steelix. Cette attaque inflige 20 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Tail",
				fr: "Queue de fer",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 100 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 100 dégâts multipliés par le nombre de faces.",
			},
			damage: "100×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		fr: "Grâce à la température élevée et la haute pression souterraine, son corps est plus dur que le métal."
	}
}

export default card
