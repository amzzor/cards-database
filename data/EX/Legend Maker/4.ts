import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reactive Shift",
				fr: "Déplacement réactif"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a React Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Delcatty is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie réaction attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Delcatty est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Link",
				fr: "Chaîne d'énergie"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Delcatty.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie et attachez-la à Delcatty."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue battoir"
			},

			damage: 40,

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
