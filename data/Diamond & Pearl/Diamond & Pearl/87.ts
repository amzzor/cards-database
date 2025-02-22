import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magneti",
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Metal Sound",
				fr: "Strido-son",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Resonance",
				fr: "Résonance",
			},
			effect: {
				en: "If the Defending Pokémon is Confused, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est Confus, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Ses extrémités génèrent les vagues électromagnétiques qui le font voler. Il se nourrit d'électricité."
	}
}

export default card
