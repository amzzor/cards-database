import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic"
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		22,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Spearow",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Free Flight",
				fr: "Vol gratuit"
			},
			effect: {
				en: "If Fearow has no Energy attached to it, Fearow's Retreat Cost is 0.",
				fr: "Si Rapasdepic ne possède pas d'Énergie, son Coût de retraite est de 0."
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
				en: "Shot Air",
				fr: "Bouffée d'air"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec vrille"
			},

			damage: 50,

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
