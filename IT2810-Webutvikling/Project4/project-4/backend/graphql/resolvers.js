const Champion = require('../models/champions');

module.exports = {
    Query: {
        getChampion: async (_, { name }) => {
            return await Champion.findOne({ name });
        },


        // Filters champions by name, attackrange, tags and resource, and sorts on name and attackrange
        async getFilteredChampions(_, { name, tag, range, resource, sortAlphabetically, page, limit }) { // returns all champions with specific name, tag, attackrange and resource
            const attackrange = range[0];
            const attackrange1 = range[1];
            if (tag == null) tag = "All"
            if (resource == null) resource = "All"
            if (sortAlphabetically != "Attack range") {
                if (resource == "All" && tag == "All") {
                    return await Champion
                        .find({
                            $and: [{ name: new RegExp(name, 'i') },
                            { "stats.attackrange": { $gte: attackrange, $lte: attackrange1 } },
                            ]
                        })
                        .sort({ name: 1 })
                        .skip(page)
                        .limit(limit)
                }
                else if (tag == "All") {
                    return await Champion
                        .find({
                            $and: [{ name: new RegExp(name, 'i') },
                            { "stats.attackrange": { $gte: attackrange, $lte: attackrange1 } },
                            { partype: resource }
                            ]
                        })
                        .sort({ name: 1 })
                        .skip(page)
                        .limit(limit)
                }
                else if (resource == "All") {
                    return await Champion
                        .find({
                            $and: [{ name: new RegExp(name, 'i') },
                            { tags: tag },
                            { "stats.attackrange": { $gte: attackrange, $lte: attackrange1 } },
                            ]
                        })
                        .sort({ name: 1 })
                        .skip(page)
                        .limit(limit)
                }
                else {
                    return await Champion
                        .find({
                            $and: [{ name: new RegExp(name, 'i') },
                            { tags: tag },
                            { "stats.attackrange": { $gte: attackrange, $lte: attackrange1 } },
                            { partype: resource }
                            ]
                        })
                        .sort({ name: 1 })
                        .skip(page)
                        .limit(limit)
                }
            }
            if (sortAlphabetically == "Attack range") {
                if (resource == "All" && tag == "All") {
                    return await Champion
                        .find({
                            $and: [{ name: new RegExp(name, 'i') },
                            { "stats.attackrange": { $gte: attackrange, $lte: attackrange1 } },
                            ]
                        })
                        .sort({ "stats.attackrange": 1 })
                        .skip(page)
                        .limit(limit)
                }
                else if (tag == "All") {
                    return await Champion
                        .find({
                            $and: [{ name: new RegExp(name, 'i') },
                            { "stats.attackrange": { $gte: attackrange, $lte: attackrange1 } },
                            { partype: resource }
                            ]
                        })
                        .sort({ "stats.attackrange": 1 })
                        .skip(page)
                        .limit(limit)
                }
                else if (resource == "All") {
                    return await Champion
                        .find({
                            $and: [{ name: new RegExp(name, 'i') },
                            { tags: tag },
                            { "stats.attackrange": { $gte: attackrange, $lte: attackrange1 } },
                            ]
                        })
                        .sort({ "stats.attackrange": 1 })
                        .skip(page)
                        .limit(limit)
                }
                else {
                    return await Champion
                        .find({
                            $and: [{ name: new RegExp(name, 'i') },
                            { tags: tag },
                            { "stats.attackrange": { $gte: attackrange, $lte: attackrange1 } },
                            { partype: resource }
                            ]
                        })
                        .sort({ "stats.attackrange": 1 })
                        .skip(page)
                        .limit(limit)
                }
            }
        }
    },

    // Mutation for giving a champion rating
    Mutation: {
        async updateRating(_, { name: name, RateChampionInput: { review } }) {
            const reviewToDelete = review[0]
            const updatedReview = review[1]
            const Champ = await Champion.find({ name: name })
            if (Champ[0].review.includes(reviewToDelete)) {
                const oldReview = Champ[0].review
                const index = oldReview.indexOf(reviewToDelete)
                oldReview.splice(index, 1)
                const newReview = oldReview.concat(updatedReview)
                await Champion.updateOne({ name: name }, { review: newReview })
                return true
            } else {
                const Champ = await Champion.find({ name: name })
                const oldReview = Champ[0].review
                const newReview = oldReview.concat(updatedReview)
                await Champion.updateOne({ name: name }, { review: newReview })
                const average = newReview.reduce((a, b) => a + b, 0) / newReview.length
                return true
            }
        }
    }
} 