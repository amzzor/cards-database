import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Machamp",
		fr: "Mackogneur lumineux"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],

			name: {
				en: "Beatdown",
				fr: "Combat"
			},

			effect: {
				en: "If the Defending Pokémon has Dark in its name or is a Pokémon, flip a coin. If heads, this attack does 100 damage instead of 50.",
				fr: "Si le Pokémon Défenseur est un Pokémon obscur ou si c'est un Pokémon , lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts au lieu de 50."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il utilise ses quatre bras au combat pour délivrer une véritable ruée de coups."
	},

	abilities: [{
		name: {
			fr: "Tandem"
		},

		effect: {
			fr: "Quand vous jouez Mackogneur depuis votre main, si vous le placez sur votre Banc, retirez 3 marqueurs de dégâts de votre Pokémon Actif. S'il a moins de 3 marqueurs de dégâts, retirez-les tous. Échangez ensuite Mackogneur lumineux contre votre Pokémon Actif."
		},

		type: "Pokemon Power"
	}]
}

export default card
