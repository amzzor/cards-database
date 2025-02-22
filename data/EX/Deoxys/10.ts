import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Swing Dance",
				fr: "Danse qui balance"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Ludicolo is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez piocher une carte. Ce pouvoir ne peut pas être utilisé si Ludicolo est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Healing Steps",
				fr: "Pas guérisseurs"
			},
			effect: {
				en: "You may discard as many cards as you like from your hand. If you do, remove that many damage counters from Ludicolo.",
				fr: "Vous pouvez défausser autant de cartes de votre main que vous le voulez. Retirez alors à Ludicolo autant de marqueurs de dégât que de cartes défaussées."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Circular Steps",
				fr: "Pas circulaires"
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's), excluding Ludicolo.",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire), Ludicolo exclus."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
