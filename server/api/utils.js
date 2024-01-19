const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets')

// function requireUser(req, res, next) {
//   if (!req.user) {
//     res.status(401);
//     next({
//       name: "MissingUserError",
//       message: "You must be logged in to perform this action"
//     });
//   }

//   next();
// }



const authRequired = (req, res, next) => {
  const token = req.get('Authorization').split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = {
      guestsId: decoded.guestsId,
      firstname: decoded.firstname,
      lastname: decoded.lastname,
      email: decoded.email
    }
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: 'Unauthorized',
    })
    throw new Error('Token invalid');
  }
  next()
}

module.exports = { authRequired }