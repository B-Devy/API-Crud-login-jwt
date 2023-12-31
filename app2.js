require('dotenv').config();
const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGO_URL);
//console.log(client)
//const client = new MongoClient('mongodb+srv://bertrandcafolla:TvacJyAnWuBV6T0z@cluster0.qy0clx8.mongodb.net/?retryWrites=true&w=majority');

async function main() {
    await client.connect();
    console.log('Connexion OK!');
    const db = client.db('myTask');
    const collection = db.collection('documents');
    // CREATE
    try {
        /*const insertData = await collection.insertMany([
            {
                name: "Alex",
                age: 25,
                sexe: "male",
                lobby: "Metal"
            },
            {
                name: "Lucie",
                age: 36,
                sexe: "femme",
                lobby: "cuisine"
            },
            {
                name: "Patrick",
                age: 60,
                sexe: "male",
                lobby: "Nature"
            }
    ])*/
    } catch (e) {throw e;}
    // READ
    try {  
        //const findData = await collection.findOne({ name: "Lucie" })
        //console.log("document trouvé: ", findData)

        const findMultiData = await collection.find({sexe: "male"});
        console.log(await findMultiData.toArray());
    }
    catch (e) {throw e;}
    // UPDATE
    try {
        const updatePierre = collection.updateMany({name: "Lucius"}, {$set: {name: "Lucia", sexe: "femme"}})
        console.log(await updatePierre)
    } catch(e) {throw e;}


    // DELETE
    try {
        const deletePierre = await collection.deleteOne({name: "Lucia"})
        console.log(await deletePierre)
    } catch(e) {throw e;}
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


