import { gql } from "@apollo/client/core";

export const champions = gql`
    query GetFilteredChampions($name: String, $tag: String, $range: [Int], $resource: String, $sortAlphabetically: String, $page: Float, $limit: Float) {
        getFilteredChampions(name: $name, tag: $tag, range: $range, resource: $resource, sortAlphabetically: $sortAlphabetically, page: $page, limit: $limit) {
            name
            tags
            partype
            image {
                loading
            }
            stats {
                attackrange
            }
        }
    }
`;

export const CHAMPIONMUTATION = gql`
    mutation UpdateRating($name: String!, $rateChampionInput: RateChampionInput!) {
        updateRating(name: $name, RateChampionInput: $rateChampionInput)
      }
`;

export const championByName = gql`
    query GetChampion($name: String) {
        getChampion(name: $name) {
            id
            name
            title
            lore
            tags
            allytips
            enemytips
            partype
            review
            image {
                loading
            }
            stats {
                attackrange
            }
            passive {
                name
                description
                image {
                    full
                }
            }
            spells {
                id
                name
                description
                image {
                    full
                }
            }
        }
    }
`;