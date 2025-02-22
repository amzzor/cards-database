import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank"
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Jet Stream",
				fr: "Force courant"
			},
			effect: {
				en: "Once during your turn (before you attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokémon, choose one of them and discard it. This power can't be used if Blastoise is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Tortank est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, défaussez-vous d'une carte Énergie attachée à Tortank, s'il en possède une. Ensuite, s'il y a des cartes Énergie attachées au Pokémon Défenseur, choisissez-en une et obligez votre adversaire à s'en défausser. Ce pouvoir ne peut pas être utilisé si Tortank est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Energy Cannon",
				fr: "Canon à énergie"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Tortank en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon."
			},
			damage: "40+",

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
