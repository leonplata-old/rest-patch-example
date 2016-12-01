const mongoose = require('mongoose');

const SpellSchema = new mongoose.Schema({
    name: String,
    points: Number
});

const Spell = mongoose.model('spell', SpellSchema);

module.exports = { SpellSchema, Spell };