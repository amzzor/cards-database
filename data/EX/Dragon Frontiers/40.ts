import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Swellow δ",
		fr: "Heledelle δ ESPÈCES DELTA"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		277,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Taillow",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extra Wing",
				fr: "Aile supplémentaire"
			},
			effect: {
				en: "The Retreat Cost for each of your Stage 2 Pokémon-ex is 0.",
				fr: "Le Coût de retraite de chacun de vos Pokémon-ex de Niveau 2 est de 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Heledelle lors du prochain tour de votre adversaire."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
