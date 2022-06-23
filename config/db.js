import mongoose from 'mongoose'
const db = "argonautes";
const passwordDb="Mam2koty"
const URI =`mongodb+srv://deotyma:${passwordDb}@cluster0.zly0o.mongodb.net/${db}?retryWrites=true&w=majority`;


const MongoDBEquipe = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI, 
                { 
                    useNewUrlParser: true, 
                    useUnifiedTopology: true
                })


            client.then(() => {return console.log(`successfully connected to DB: ${db}`)})
            .catch((err)=> {console.log(err)})
        } catch(err) {
             throw Error(err)
        }
    }
}


export default MongoDBEquipe;