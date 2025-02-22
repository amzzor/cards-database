import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Mysterious Shard",
		fr: "Écharde mystérieuse"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Écharde mystérieuse à 1 de vos Pokémon (Pokémon-ex exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Écharde mystérieuse est attachée est un Pokémon-ex, défaussez cette carte.\n\nPrévenez tous les effets d'une attaque, dégâts inclus, infligés au Pokémon auquel Écharde mystérieuse est attachée par des Pokémon-ex de votre adversaire. Défaussez cette carte à la fin du prochain tour de votre adversaire."
	}
}

export default card
