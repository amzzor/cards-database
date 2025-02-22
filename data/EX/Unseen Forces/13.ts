import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure"
			},
			effect: {
				en: "As long as Slowbro has any Psychic Energy attached to it, Slowbro is both Water and Psychic type.",
				fr: "Tant que Flagadoss possède des Énergies , il est à la fois de type  et ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Parallel Gain",
				fr: "Gain parallèle"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon (including Slowbro).",
				fr: "Retirez 1 marqueur de dégât à chacun de vos Pokémon (Flagadoss inclus)."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-boulé"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
