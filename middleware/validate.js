const validator = require('../helpers/validate');

const saveMovie = (req, res, next) => {
    const validationRule = {
      title: 'required|string',
      release_date: 'required|string',
      genre: 'required|string',
      director: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
};

const saveShow = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    year: 'required|number',
    Director: 'required|string',
    Rating: 'required|string',
    Genre: 'required|string',
    Writer: 'required|string',
    Seasons: 'required|number',
    IDMb_Rating: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};
  
  module.exports = {
    saveMovie,
    saveShow
  };