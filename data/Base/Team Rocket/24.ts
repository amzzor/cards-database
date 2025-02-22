import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Golbat",
		fr: "Nosferalto obscur"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 50,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weavile",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Sneak Attack",
				fr: "Attaque sournoise"
			},
			effect: {
				en: "When you play Dark Golbat from your hand, you may choose 1 of your opponent's Pokémon. If you do, Dark Golbat does 10 damage to that Pokémon. Apply Weakness and Resistance.",
				fr: "Lorsque vous jouez Nosferalto obscur depuis votre main, vous pouvez choisir 1 des Pokémon de votre adversaire. Dans ce cas, Nosferalto obscur inflige 10 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Flitter",
				fr: "Voltige"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance pour cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et de la Résistance subsistent.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Psychic",
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
		fr: "Il se faufile silencieusement derrière ses proies pour les attaquer, les tuant parfois d'une seule morsure."
	}
}

export default card
