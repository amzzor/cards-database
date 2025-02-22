import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Power Plant",
		fr: "Centrale d'énergie"
	},

	illustrator: "Kai Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-vous de cette carte si une autre carte Stade arrive en jeu.\n\nUne seule fois pendant chacun de ses tours, un joueur peut se défausser d'une carte Énergie de base de sa main. S'il fait ainsi, il choisit une carte Énergie de base de sa pile de défausse, la montre à son adversaire et l'ajoute ensuite à sa main."
	}
}

export default card
