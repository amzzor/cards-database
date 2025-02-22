import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Bagon δ",
		fr: "Draby δ ESPÈCES DELTA"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		371,
	],
	hp: 40,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Granite Head",
				fr: "Tête de granit"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Bagon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Draby par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 10,

		},
	],






}

export default card
