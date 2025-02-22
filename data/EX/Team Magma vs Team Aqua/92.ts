import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Raikou ex",
		fr: "Raikou ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 100,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Explosion de lumière"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Tackle",
				fr: "Charge éclair"
			},
			effect: {
				en: "Flip a coin. If tails, Raikou ex does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Raikou ex s'inflige 20 dégâts."
			},
			damage: 70,

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
