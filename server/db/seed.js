const client = require('./client')
const { tours, guests } = require('./seedData')
const { createGuests } = require('./sqlHelperFunctions/guests')
const { createTours } = require('./sqlHelperFunctions/tours')


const dropTables = async() => {
  try{
    console.log("Starting to drop tables...")
    await client.query(`
    DROP TABLE IF EXISTS tours;
    DROP TABLE IF EXISTS guests;
    `)
    console.log('Table Dropped!')
  }catch(error){
    console.log("Error dropping table:", error)
  }
}

const createTable = async() => {
  try{
    console.log("building tables..")
    await client.query(`
    CREATE TABLE guests(
      "guestsId" SERIAL PRIMARY KEY,
      firstname varchar(50) NOT NULL,
      lastname varchar(50) NOT NULL,
      email varchar(50) NOT NULL,
      password varchar(255) NOT NULL
    );
    CREATE TABLE tours(
      "tourId" SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      "guestsId" INTEGER REFERENCES guests("guestsId"),
      description TEXT NOT NULL,
      googlemap TEXT NOT NULL,
      "imgUrl" TEXT NOT NULL
    )
    `)
  }catch(error){
    console.error(error)
  }
}
const createInitialGuests = async () => {
  try{
    for(const guest of guests){
      await createGuests(guest)
    }
    console.log("created guests")
  }catch(error){
    throw error
  }
}
const createInitialTours = async () => {
  try{
    for(const tour of tours){
      await createTours(tour)
    }
    console.log("created tours")
  }catch(error){
    throw error
  }
}

const buildDb = async() => {
  try{
    client.connect()
    await dropTables()
    await createTable()
    await createInitialGuests()
    await createInitialTours()
  }catch(error){
    console.error(error)
  }finally{
    client.end()
  }
}

buildDb()