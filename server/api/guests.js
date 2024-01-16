const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");
const SALT_ROUNDS = 10;
const{
    getAllGuests,
    createGuests,
    getGuestsByFirstname
} = require("../db/sqlHelperFunctions/guests")


// GET - /api/guests - get all guests
router.get("/",async(req,res,next) => {
    try{
        const guests = await getAllGuests()
        res.send(guests) 
    }catch(error){
        next(error)
    }
})

// GET - /api/guests - get all guests
router.get("/:firstname",async(req,res,next) => {
    try{
        const guests = await getGuestsByFirstname(req.params.firstname)
        res.send(guests) 
    }catch(error){
        next(error)
    }
})

//POST - /api/guests/register - create a new guest

router.post("/register",async(req,res,next) => {
    try{
        const {firstname,lastname,email,password} = req.body
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
        const guests = await createGuests({firstname,lastname,email,password: hashedPassword})
        delete guests.password

        const token = jwt.sign(guests, JWT_SECRET)

        res.cookie("token", token, {
			sameSite: "strict",
			httpOnly: true,
			signed: true,
		})

        delete guests.password

        res.send({ token, guests})
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
		}

    }catch(error){
        next(error)
    }
})

router.post("/logout", async (req, res, next) => {
	try {
		res.clearCookie("token", {
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


module.exports = router