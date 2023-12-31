require('dotenv').config();
const mongoose = require('mongoose');

async function connectDb()  {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Db connectée!')
}
module.exports = {
    connectDb
}
/*
    const firstPerson = new User({
        name: "Philippe",
        age: 25,
        email: "statuedujardin@gmail.com",
        password: "grospoisson"
    });
    const secondPerson = new User({
        name: "Marc",
        age: 33,
        email: "crabe5263@hotmail.fr",
        password: "kakikukeko55"
    });
    console.log(firstPerson, secondPerson)
    const firstSave = await firstPerson.save()
    const secondSave = await secondPerson.save()
    */
