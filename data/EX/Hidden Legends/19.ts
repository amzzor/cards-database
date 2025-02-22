import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Huntail",
		fr: "Serpang"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		367,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
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
				en: "Dark Splash",
				fr: "Éclaboussure obscure"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Darkness Pokémon in play.\"",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon  en jeu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
