import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		44,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Oddish",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Enervating Pollen",
				fr: "Pollen irritant"
			},
			effect: {
				en: "As long as Gloom is in play, Resistance on each player's Pokémon only reduces damage by 10.",
				fr: "Tant que Ortide est en jeu, la Résistance du Pokémon Actif de chaque joueur ne réduit les dégâts que de 10."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleep Sap",
				fr: "Sève dodo"
			},
			effect: {
				en: "Both the Defending Pokémon and Gloom are now Asleep (after doing damage).",
				fr: "Le Pokémon Défenseur et Ortide sont maintenant Endormis (après avoir infligé les dégâts)."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
