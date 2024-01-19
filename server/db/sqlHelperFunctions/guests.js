const client = require('../client')

const createGuests = async({firstname,lastname,email,password}) => {
    try{
        const {
            rows: [guests]
        } = await client.query(`
            INSERT INTO guests(firstname,lastname,email,password)
            VALUES($1,$2,$3,$4)
            RETURNING *;
            `,[firstname,lastname,email,password]
            )
            return guests
    } catch(error){
        throw error
    }
}

const getAllGuests = async() => {
    try{
        const { rows } = await client.query(`
            SELECT * FROM guests;
        `)
        return rows
    }catch(error){
        throw error
    }
}

// const getGuestsById = async(guestsId) => {
//     try{
//     const { rows: [guest] } = await client.query(`
//     SELECT "guestsId",firstname,lastname,email 
//     FROM guests 
//     WHERE "guestsId" = ${guestsId};
//     `)
//     return guest
//     }catch(error){
//         throw error
//     }
// }

const getGuestsByFirstname = async(firstname) => {
    const {
        rows: [guest],
    } = await client.query(`
    SELECT * FROM guests WHERE guests.firstname = '${firstname}';
    `)
    return guest
}

module.exports = {createGuests,getAllGuests,getGuestsByFirstname}