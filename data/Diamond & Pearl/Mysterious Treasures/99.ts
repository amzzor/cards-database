import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drowsy",
				fr: "Ensommeillé"
			},
			effect: {
				en: "Both Slakoth and the Defending Pokémon are now Asleep.",
				fr: "Parecool et le Pokémon Défenseur sont maintenant Endormis."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	description: {
		fr: "Il passe le plus clair de son temps affalé. Rien qu'à le voir, on a envie de bâiller."
	}
}

export default card
