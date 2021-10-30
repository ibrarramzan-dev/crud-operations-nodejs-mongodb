const Employee = require("../models/Employee");

const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "an error occurred",
      });
    });
};

const show = (req, res, next) => {
  let employeeId = req.body.employeeId;
  Employee.findById(employeeId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occurred",
      });
    });
};

const store = (req, res, nexyt) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });

  employee
    .save()
    .then((response) => {
      res.json({
        message: "Employee added successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occurred",
      });
    });
};

const update = (req, res, next) => {
  let employeeId = req.body.employeeId;

  let updateData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };

  Employee.findByIdAndUpdate(employeeId, { $set: updateData })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occurred",
      });
    });
};

const destroy = (req, res, next) => {
  let employeeId = req.body.employeeId;
  Employee.findByIdAndRemove(employeeId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occurred",
      });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
