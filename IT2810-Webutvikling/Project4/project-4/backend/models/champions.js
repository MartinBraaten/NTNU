const { model, Schema } = require('mongoose');

const championSchema = new Schema({
    id: String,
    name: String,
    title: String,
    image: {
        loading: String
    },
    stats: {
        attackrange: Number
    },
    lore: String,
    tags: [String],
    allytips: [String],
    enemytips: [String],
    partype: String,
    spells: [{
        id: String,
        name: String,
        description: String,
        image: {
            full: String
        }
    }],
    passive: {
        name: String,
        description: String,
        image: {
            full: String
        }
    },
    review: [Number]
}, {collection: 'champions'});

module.exports = model('Champion', championSchema, 'champions');