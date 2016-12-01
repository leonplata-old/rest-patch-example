const jsonpatch = require('json-patch');
const { Spell } = require('../models/spell-model');

function one(req, res) {
    let id = req.swagger.params.id;
    Spell.findById(id.value)
        .then(spell => res.send(spell))
        .catch(err => res.status(500).send(err));
}

function all(req, res) {
    Spell.find()
        .then(spells => res.send(spells))
        .catch(err => res.status(500).send(err));
}

function replace(req, res) {
    
}

function insert(req, res) {
    let body = req.swagger.params.body;
    console.log(body.value);
    let spell = new Spell(body.value);
    spell.save()
        .then(spell => res.send(spell))
        .catch(err => res.status(500).send(err));
}

function modify(req, res) {
    let { id, body } = req.swagger.params;
    Spell.findById(id.value)
        .then(spell => jsonpatch.apply(spell, body.value).save())
        .then(spell => res.send(spell))
        .catch(err => res.status(500).send(err));
}

function remove(req, res) {
    let id = req.swagger.params.id;
    Spell.findById(id.value)
        .then(spell => spell.remove())
        .catch(err => res.status(500).send(err));
}

module.exports = { one, all, replace, insert, modify, remove };