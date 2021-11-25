import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "M Gallade EX",
		fr: "M-Gallame EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 220,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gallade-EX",
		fr: "Gallame-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Unwavering Blade",
				fr: "Lame Sanguinaire",
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant déjà des marqueurs de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 110,

		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX"
}

export default card
