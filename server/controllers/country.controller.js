const Model = require('../models/country.model');

exports.findAll = (req, res) => {
  Model.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving country info."
      });
    else res.send(data);
  });
}

exports.addOne = (req, res) => {
  // Validate request
  const { name } = req.body;
  if (!(name)) {
    res.status(400).send({
      message: "Content is invalid!"
    });
    return;
  }
  Model.addOne(req.body, (err, data) => {
    // Validate request
    const { name } = req.body;
    if (!(name)) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding company entity info."
      });
    else res.send(data);
  });
}

exports.updateOne = (req, res) => {
  // Validate request
  const id = req.params.id;
  const { name } = req.body;
  if (!(name && id)) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  Model.updateOne(id, req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating company entity info."
      });
    else res.send(data);
  });
}

exports.deleteOne = (req, res) => {
  // Validate request
  const id = req.params.id;
  if (!id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  Model.deleteOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting company entity info."
      });
    else res.send({});
  });
}

exports.updateOrder = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  Model.updateOrder(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating order."
      });
    else res.send({});
  })
}
