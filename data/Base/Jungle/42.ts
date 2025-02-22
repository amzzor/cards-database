import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Meowth",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pounce",
				fr: "Bond"
			},
			effect: {
				en: "If the Defending Pokémon attacks Persian during your opponent's next turn, any damage done by the attack is reduce by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
				fr: "Si le Pokémon Défenseur attaque Persian pendant le prochain tour de votre adversaire, les dégâts infligés par cette attaque sont réduits de 10 (après application de la Faiblesse et de la Résistance). (Si l'un des deux Pokémon bat en retraite, cet effet prend fin.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Très apprécié pour sa fourrure, il est difficile à apprivoiser en raison de son caractère rétif."
	}
}

export default card
