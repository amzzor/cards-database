import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Seleroc"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		337,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Moonglow",
				fr: "Éclat de lune"
			},
			effect: {
				en: "The Retreat Cost for each Solrock you have in play is 0.",
				fr: "Le Coût de retraite de chaque Solaroc que vous avez en jeu est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Foresight",
				fr: "Prévoyance"
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck d'1 joueur et replacez-les dans le deck de ce joueur dans n'importe quel ordre."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Target Beam",
				fr: "Cible lumineuse"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Solrock you have in play.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Solaroc que vous avez en jeu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
