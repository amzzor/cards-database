import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Flygon δ",
		fr: "Libegon δ ESPÈCES DELTA"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 110,
	types: [
		"Grass",
		"Metal",
	],
	evolveFrom: {
		en: "Vibrava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Supply",
				fr: "Provision Delta"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a basic Energy card or a δ Rainbow Energy card from your hand to 1 of your Pokémon that has δ on its card. This power can't be used if Flygon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base ou une carte Énergie Multicolore δ de votre main à 1 de vos Pokémon possédant le symbole δ. Ce pouvoir ne peut pas être utilisé si Libegon est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
