import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Kabutops",
		fr: "Kabutops brillant"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Lightning",
			],
			name: {
				en: "Lightning Cut",
				fr: "Coupe éclair"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does 30 damage and Shining Kabutops does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires et inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire. (N'appliquez ni la Faiblesse, ni la Résistance aux Pokémon du Banc.) Si c'est pile, cette attaque inflige 30 dégâts et Kabutops brillant s'inflige 10 dégâts."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Water",
				"Water",
			],
			name: {
				en: "Water Slash",
				fr: "Tranche O"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each Energy attached to Shining Kabutops but not used to pay for this attack's Energy cost. Don't apply Resistance.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Kabutops brillant mais non utilisée pour payer le coût d'Énergie de cette attaque. N'appliquez pas la Résistance."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Ce Pokémon antique utilise ses griffes acérées pour trancher ses proies et récupérer leur sang."
	}
}

export default card
