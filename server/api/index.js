const express = require('express')
const router = express.Router()
// const { getUserById } = require('../db/sqlHelperFunctions/guests')
// const { JWT_SECRET } = require('../secrets')
// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

// // set `req.user` if possible
// router.use(async (req, res, next) => {
//     const prefix = 'Bearer ';
//     const auth = req.header('Authorization');
    
//     if (!auth) { // nothing to see here
//       next();
//     } else if (auth.startsWith(prefix)) {
//       const token = auth.slice(prefix.length);
      
//       try {
//         const parsedToken = jwt.verify(token, JWT_SECRET);
        
//         const id = parsedToken && parsedToken.id
//         if (id) {
//           req.user = await getUserById(guestsId);
//           next();
//         }
//       } catch (error) {
//         next(error);
//       }
//     } else {
//       next({
//         name: 'AuthorizationHeaderError',
//         message: `Authorization token must start with ${ prefix }`
//       });
//     }
//   });
  
//   router.use((req, res, next) => {
//     if (req.user) {
//       console.log("User is set:", req.user);
//     }
//     next();
//   });

// ROUTER: /api/
router.use('/tours', require('./tours'));
router.use('/guests', require('./guests'));


module.exports = router;