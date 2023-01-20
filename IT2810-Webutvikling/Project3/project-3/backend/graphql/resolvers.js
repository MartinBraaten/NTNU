const Champion = require('../models/champions');

module.exports = {
    Query: {
        async getChampionsByName(_, {name}){
            return await Champion.find({name: new RegExp(name, 'i')}) // returns champion with specific name, case insensitive
        },
        async getChampions(){
            return await Champion.find() // returns all champions in database
        },
        async getChampionsByAttackrange(_, {attackrange}){ //  returns all champions with <= attackrange
            return await Champion.find({"stats.attackrange": {$lte: attackrange}}) // $lt - less than or equal to
        },
    },
    Mutation: {
        async addRating(_, {name: name, RateChampionInput : {review}}){
            const Champ = await Champion.find({name: name})
            const oldReview = Champ[0].review
            const newReview = oldReview.concat(review)
            await Champion.updateOne({name: name}, {review: newReview})
            return true

        }
    }



}