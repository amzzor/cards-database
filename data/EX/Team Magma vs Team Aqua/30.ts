import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Mightyena",
		fr: "Grahyena de Team Aqua"
	},
	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Aqua Call",
				fr: "Demande d'Aqua"
			},
			effect: {
				en: "Search your deck for Pokémon that has Team Aqua in its name, show up to 3 of them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 3 Pokémon dont le nom comporte Team Aqua, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
