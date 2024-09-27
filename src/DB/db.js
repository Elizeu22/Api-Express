import mongoose,{mongo} from "mongoose";
import "dotenv/config";


async function conexaoDatabase(){
    mongoose.connect(process.env.BANCO)
    return mongoose.connection;
}



export default conexaoDatabase;