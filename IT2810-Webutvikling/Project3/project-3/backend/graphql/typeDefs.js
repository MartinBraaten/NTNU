const { gql } = require('apollo-server');

module.exports = gql`
type Champion {
    id: String
    name: String
    title: String
    lore: String
    tags: [String]
    allytips: [String]
    enemytips: [String]
    partype: String
    review: [Int]
    image: Image
    stats: Stats
    passive: Passive
    spells: [Spells]

}

type Spells {
    id: String
    name: String
    description: String
    image: Imagepassive
}

type Passive {
    name: String
    description: String
    image: Imagepassive
}
type Imagepassive {
    full: String
}


type Stats {
    attackrange: Int
}


type Image {
    loading: String
}
    
input RateChampionInput {
    review: Int
}


type Query {
    getChampionsByName(name: String!): [Champion]
    getChampions: [Champion]
    getChampionsByAttackrange(attackrange: Int!): [Champion]


}
type Mutation {
    addRating(name: String!, RateChampionInput: RateChampionInput): Boolean
}

`
