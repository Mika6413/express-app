/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;
  const errors = [];
  //   console.log("validator");
  if (title == null) {
    errors.push({ field: "title", message: "This field is required" });
  } else if (title.length >= 255) {
    errors.push({
      field: "title",
      message: "Should contain less than 255 characters",
    });
  }
  if (director == null) {
    errors.push({ field: "director", message: "This field is required" });
  } else if (director.length >= 255) {
    errors.push({
      field: "director",
      message: "Should contain less than 255 characters",
    });
  }
  if (year == null) {
    errors.push({ field: "year", message: "This field is required" });
  }
  if (color == null) {
    errors.push({ field: "color", message: "This field is rquired" });
  }
  if (duration == null) {
    errors.push({ field: "duration", message: "This field is required" });
  }

  //   console.log(errors);

  if (errors.length > 0) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

const validateUser = (req, res, next) => {
  const { firstname, lastname, email, city, language } = req.body;
  const errors = [];

  if (firstname == null) {
    errors.push({ field: "firstname", message: "This field is required" });
  } else if (firstname.length >= 255) {
    errors.push({
      field: "firstname",
      message: "Should contain less than 255 characters",
    });
  }
  if (lastname == null) {
    errors.push({ field: "lastname", message: "This field is required" });
  } else if (lastname.length >= 255) {
    errors.push({
      field: "lastname",
      message: "Should contain less than 255 characters",
    });
  }
  if (email == null) {
    errors.push({ field: "email", message: "This field is required" });
  }
  if (city == null) {
    errors.push({ field: "city", message: "This field is required" });
  } else if (city.length >= 255) {
    errors.push({
      field: "city",
      message: "Should contain less than 255 characters",
    });
  }
  if (language == null) {
    errors.push({ field: "language", message: "This fiels is required" });
  } else if (language.length >= 255) {
    errors.push({
      field: "language",
      message: "Should contain less than 255 characters",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = {
  validateMovie,
  validateUser,
};
