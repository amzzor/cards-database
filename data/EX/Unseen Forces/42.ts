import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Ecremeuh"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		241,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Fat",
				fr: "Isograisse"
			},
			effect: {
				en: "Any damage done to Miltank by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Les dégâts infligés à Ecremeuh par des attaques de Pokémon  et  sont réduits de 30 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Healing Milk",
				fr: "Lait guérisseur"
			},
			effect: {
				en: "Flip 2 coins. For each heads, remove 2 damage counters from 1 of your Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque face, retirez à 1 de vos Pokémon 2 marqueurs de dégât."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
