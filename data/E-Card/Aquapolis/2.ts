import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extreme Speed",
				fr: "Vitesse extrême"
			},
			effect: {
				en: "You pay Colorless less to retreat Arcanine for each Energy attached to it.",
				fr: "Vous payez  de moins pour faire battre Arcanin en retraite pour chaque Énergie qui lui est attachée."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blow",
				fr: "Coud'flammes"
			},
			effect: {
				en: "You may discard any number of Fire Energy cards attached to Arcanine. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded in this way. This attack does 30 damage plus 30 more damage for each heads.",
				fr: "Vous pouvez vous défausser d'autant de cartes Énergie  attachées à Arcanin que vous le désirez. Si vous le faites, lancez un nombre de pièces égal au nombre de cartes Énergie  dont vous vous êtes défaussé. Cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires pour chaque face."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
