import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Leafeon",
		fr: "Phyllali",
	},

	illustrator: "Noriko Hotta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miasma Wind",
				fr: "Vent miasme",
			},
			effect: {
				en: "Does 50 damage times the number of Special Conditions affecting the Defending Pokémon.",
				fr: "Inflige 50 dégâts multipliés par le nombre d’États Spéciaux affectant le Pokémon Défenseur.",
			},
			damage: "50×",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur apaisante",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "When you see Leafeon asleep in a patch of sunshine, you’ll know it is using photosynthesis to produce clean air."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
