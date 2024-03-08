import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({path:'./.env'})
//TODO: avec node 20 il n'est plus nécessaire de passer par dotenv
//https://netbasal.com/node-js-v20-6-0-introducing-built-in-env-file-support-fb1b1de4f1fa

const {
  MONGO_CLUSTER,
  MONGO_DATABASE,
  MONGO_USER,
  MONGO_PWD
} = process.env
// mongodb+srv://pepito:XVHxhtmQkRH9hgz6@cluster0.ukzzdbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const MONGO_URI_STRING = [
  "mongodb+srv://",
  MONGO_USER,
  ":",
  MONGO_PWD,
  "@",
  MONGO_CLUSTER,
  "/?retryWrites=true&w=majority&appName=Cluster0"
].join('')

const connect = () => {

    mongoose.connect(MONGO_URI_STRING)
      .then(() => {
        return console.info(`Successfully connected to ${MONGO_CLUSTER}@${MONGO_DATABASE}`);
      })
      .catch(error => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });

    mongoose.connection.on('disconnected', connect);
};
export default connect
