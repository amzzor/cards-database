import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Deoxys Normal Forme",
		fr: "Deoxys Forme Normale",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		386,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Form Change",
				fr: "Changement de forme",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for any Deoxys and switch it with Deoxys Normal Forme. (Any cards attached to Deoxys Normal Forme, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys Normal Forme on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys et l'échanger avec Deoxys Forme Normale. (Toutes les cartes qui lui sont attachées, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys Forme Normale au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Energy Crush",
				fr: "Écras'énergie",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		fr: "Il vient d'un virus extraterrestre arrivé avec une météorite et ayant subi une mutation génétique."
	}
}

export default card
