import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Charizard",
		fr: "Dracaufeu obscur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nail Flick",
				fr: "Chiquenaude"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Continuous Fireball",
				fr: "Boules de feu continues"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to Dark Charizard. This attack does 50 damage times the number of heads. Discard a number of Energy cards attached to Dark Charizard equal to the number of heads.",
				fr: "Lancez un nombre de pièces égal au nombre d'Énergies  attachées à Dracaufeu obscur. Cette attaque inflige 50 dégâts multipliés par le nombre de faces. Défaussez autant de cartes Énergies  attachées à Dracaufeu obscur que le nombre de faces."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Comme possédé, il crache du feu tel un volcan, essayant de brûler tout ce qu'il voit."
	}
}

export default card
