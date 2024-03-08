import mongoose from 'mongoose';
const { Schema } = mongoose;


const projectSchema = new Schema({
    title       : String,
    team        : [Schema.Types.ObjectId],
});

const projectModel = mongoose.model('projects', projectSchema);

export default projectModel;