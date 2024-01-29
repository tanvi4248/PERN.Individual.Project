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



const getGuestsByFirstname = async(firstname) => {
    const { rows: [guest] } = await client.query(`
    SELECT * FROM guests WHERE guests.firstname = '${firstname}';
    `)
    return guest
}

const getReservations = async (guestsId,reservationId) => {
    try {
      const { rows } = await client.query(`
            SELECT 
            g.guest_id AS "guestsId",
            g.rid AS "reservationId",
            t.id AS "tourId",
            t.title AS title,
            t.description AS description,
            t.imgurl As imgurl,
            t.price AS price
            FROM reservations AS g
            JOIN tours AS t ON g.tour_id = t.id
            WHERE guest_id = ${guestsId};
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  };

const createReservations = async(body) => {
    try{
        const {
            rows: [guests]
        } = await client.query(`
            INSERT INTO reservations(guest_id,tour_id)
            VALUES($1,$2)
            RETURNING *;
            `,[body.guestsId,body.tourId]
            )
            return guests
    } catch(error){
        throw error
    }
}

const deleteReservations = async(reservationId) => {
    try {
        const { rows } = await client.query(`DELETE FROM reservations WHERE rid=$1 RETURNING *`, [reservationId]);
        return rows[0];
    } catch (err) {
        throw err
    }
}

module.exports = {createGuests,getAllGuests,getGuestsByFirstname,getReservations,createReservations,deleteReservations}