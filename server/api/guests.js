const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");
const SALT_ROUNDS = 10;
const { authRequired } = require('./utils')

const{
    getAllGuests,
    createGuests,
    getGuestsByFirstname,
    getReservations
} = require("../db/sqlHelperFunctions/guests");



// GET - /api/guests - get all guests
router.get("/",async(req,res,next) => {
    try{
        const guests = await getAllGuests()
        //console.log(req.path) 
        res.send(guests) 
    }catch(error){
        next(error)
    }
})


// GET - /api/guests - get all guests
router.get("/me",authRequired,async(req,res,next) => {
    res.send(req.user) 
})

//POST - /api/guests/register - create a new guest

router.post("/register",async(req,res,next) => {
    try{
        const {firstname,lastname,email,password} = req.body
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
        const guest = await createGuests({firstname,lastname,email,password: hashedPassword})
        delete guest.password

        const token = jwt.sign(guest, JWT_SECRET)

        res.cookie("token", token, {
			sameSite: "strict",
			httpOnly: true,
			signed: true,
		})

        delete guest.password

        res.send({ token, guest})
    } catch(error){
        next(error)
    }
})

router.post("/login",async (req,res,next) => {
    try{
        const {firstname,password} = req.body
        const guest = await getGuestsByFirstname(firstname)
        const validPassword = await bcrypt.compare(password,guest.password)
        if (validPassword) {
			const token = jwt.sign(guest, JWT_SECRET);

			res.cookie("token", token, {
				sameSite: "strict",
				httpOnly: true,
				signed: true
			});

			delete guest.password

			res.send({ token, guest})
		} else {
            res.status(401).send({ error: 'Invalid password' })
        }

    }catch(error){
        console.log('error from post api router with login', error)
        next(error)
    }
})

router.post("/logout", async (req, res, next) => {
	try {
        const token = jwt.sign(guest, JWT_SECRET)
		res.clearCookie("token", token, {
			sameSite: "strict",
			httpOnly: true,
			signed: true,
		})
		res.send({
			loggedIn: false,
			message: "Logged Out",
		})
	} catch (error) {
		next(error);
	}
})

router.get("/:id/reservations", async (req, res, next) => {
    try {
      const reservations = await getReservations(req.params.id);
      res.send(reservations);
    } catch (error) {
      next(error);
    }
  });


module.exports = router