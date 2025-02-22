import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Medicham ex",
		fr: "Charmina ex"
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		308,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Meditite",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wise Aura",
				fr: "Sage aura"
			},
			effect: {
				en: "As long as Medicham ex is your Active Pokémon, each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) can't use any Poké-Powers.",
				fr: "Tant que Charmina ex est votre Pokémon Actif, chaque Pokémon (Pokémon-ex exclus) (les vôtres et ceux de votre adversaire), ne peut pas utiliser de Poké-Powers."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pure Power",
				fr: "Pouvoir pur"
			},
			effect: {
				en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Kick",
				fr: "Coup de pied céleste"
			},
			effect: {
				en: "If the Defending Pokémon has Fighting Resistance, this attack does 60 damage plus 40 more damage.",
				fr: "Si le Pokémon Défenseur possède une Résistance , cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
