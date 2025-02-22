import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Golduck δ",
		fr: "Akwakwak δ ESPÈCES DELTA"
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Psyduck",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Block",
				fr: "Blocage Delta"
			},
			effect: {
				en: "As long as any Stadium card with Holon in its name is in play, your opponent can't play any Stadium cards from his or her hand.",
				fr: "Tant que des cartes Stade dont le nom comporte Holon sont en jeu, votre adversaire ne peut pas jouer de carte Stade de sa main."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mind Play",
				fr: "Manoeuvre psychologique"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose. If that card is a Trainer card, this attack does 30 damage plus 30 more damage, and discard that card. If that card is not a Trainer card, return it to your opponent's hand.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez cette carte. Si c'est une carte Dresseur, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Défaussez cette carte. Si cette carte n'est pas une carte Dresseur, replacez-la dans la main de votre adversaire."
			},
			damage: "30+",

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
