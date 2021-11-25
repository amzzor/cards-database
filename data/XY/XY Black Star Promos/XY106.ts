import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Gyarados EX",
		fr: "Léviator EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Stormy Seas",
			fr: "Mers Orageuses",
		},
		effect: {
			en: "Flip a coin until you get tails. For each heads, search your deck for a Water Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, cherchez une carte Énergie Water dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},

	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			fr: "Éclaboussure Brûlante"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	stage: "Basic"
}

export default card
