console.log('loaded');

function getAll(req, res) {
    res.send([{ name: "Jhon Doe", age: 2 }]);
}

function patch(req, res) {
    res.send({ name: "Jhon Doe 2", age: 1 });
}

module.exports = { patch, getAll };