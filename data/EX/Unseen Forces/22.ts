import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Elektek"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Stages of Evolution",
				fr: "Niveaux d'Évolution"
			},
			effect: {
				en: "As long as Electabuzz is an Evolved Pokémon, damage done by attacks from your opponent's Pokémon that has any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Tant qu'Elektek est un Pokémon Évolué, les dégâts infligés par les attaques de Pokémon de votre adversaire possédant des cartes Énergie spéciales sont réduits de 40 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Double Shock",
				fr: "Double choc"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads. If either of the coins is heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces. Si une des pièces est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: "10×",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Luster Blast",
				fr: "Explosion étincelante"
			},
			effect: {
				en: "Discard 3 Energy attached to Electabuzz.",
				fr: "Défaussez 3 Énergies attachées à Elektek."
			},
			damage: 70,

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
