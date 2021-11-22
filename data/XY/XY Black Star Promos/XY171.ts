import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Salamence EX",
		fr: "M-Drattak EX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 230,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Salamence-EX",
		fr: "Drattak-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Savage Wing",
			},
			effect: {
				en: "Discard as many basic Fire Energy attached to this Pokémon as you like. This attack does 40 more damage for each Energy card discarded in this way.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	suffix: "EX",
	retreat: 1
}

export default card
