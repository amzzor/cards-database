import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Curse Powder",
		fr: "Poudre maléfique"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Attachez Poudre maléfique à un de vos Pokémon Évolués (Pokémon-ex exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Poudre maléfique est attachée est un Pokémon de base ou un Pokémon-ex , défaussez Poudre maléfique.\n\nSi le Pokémon auquel Poudre maléfique est attachée est votre Pokémon Actif et est mis K.O. par les dégâts d'une attaque de votre adversaire, placez 3 marqueurs de dégât sur le Pokémon Attaquant."
	}
}

export default card
