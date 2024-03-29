const client = require("../client")
const util = require('../util')


const getAllTours = async () => {
    try{
        const { rows } = await client.query(`SELECT * FROM tours;`)
        return rows
    }catch(error){
        throw error
    }
}



const getToursById = async(tourId) => {
    try{
        const { rows: [tours] } = await client.query(`
        SELECT * FROM tours WHERE "id" = ${tourId};`)
        return tours
    }catch(error){
        throw error
    }
}

const createTours = async({title,description,googlemap,imgurl,price,IsReserve}) => {
    try{
        const { rows: [tours] } = await client.query(`
        INSERT INTO tours("title","description","googlemap",imgurl,price,"IsReserve")
        VALUES($1,$2,$3,$4,$5,$6)
        RETURNING *;
        `,
        [title,description,googlemap,imgurl,price,IsReserve]
        )
        return tours
    }catch(error){
        throw error
    }
}
const updateTours = async (id, fields) => {
    try {
        const toUpdate = {}
        for (let column in fields) {
            if (fields[column] !== undefined) toUpdate[column] = fields[column];
        }
        let tour;

        if (util.dbFields(toUpdate).insert.length > 0) {
            const { rows } = await client.query(`
            UPDATE tours
            SET ${util.dbFields(toUpdate).insert}
            WHERE id=${id}
            RETURNING *;
          `, Object.values(toUpdate));
            tour = rows[0];
        }

        return tour;
    } catch (error) {
        throw error
    }
}

const deleteTours = async(tourId) => {
    try {
        const { rows } = await client.query('DELETE FROM tours WHERE "id"=$1 RETURNING *', [tourId]);
        return rows[0];
    } catch (err) {
        throw err
    }
}


module.exports = {getAllTours,getToursById,createTours,updateTours,deleteTours}