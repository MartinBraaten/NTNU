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
    review: [Int]
}

type Query {
    getChampion(name: String): Champion
    getFilteredChampions(name: String, tag: String, range: [Int], resource: String, sortAlphabetically: String, page: Float, limit: Float): [Champion]
}
    type Mutation {
    updateRating(name: String!, RateChampionInput: RateChampionInput!): Boolean
}

`
