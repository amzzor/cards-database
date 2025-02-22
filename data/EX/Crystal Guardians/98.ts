import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Swampert ex",
		fr: "Laggron ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marshtomp",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Recycle",
				fr: "Recyclage d'énergie"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for 3 Energy cards and attach them to your Pokémon in any way you like. If you do, your turn ends. This power can't be used if Swampert ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse 3 cartes Énergie et les attacher à vos Pokémon de la façon que vous voulez. Votre tour est alors terminé. Ce pouvoir ne peut pas être utilisé si Laggron ex est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ultra Pump",
				fr: "Super pompe"
			},
			effect: {
				en: "You may discard 2 cards from your hand. If you do, this attack does 60 damage plus 20 more damage and does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser 2 cartes de votre main. Cette attaque inflige alors 60 dégâts plus 20 dégâts supplémentaires et 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
