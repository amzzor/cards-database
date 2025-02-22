import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Exeggutor δ",
		fr: "Noadkoko δ ESPÈCES DELTA"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Exeggcute",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Delta Circle",
				fr: "Cercle Delta"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Pokémon you have in play that has δ on its card.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon possédant le symbole δ que vous avez en jeu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Split Bomb",
				fr: "Bombe fendante"
			},
			effect: {
				en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
