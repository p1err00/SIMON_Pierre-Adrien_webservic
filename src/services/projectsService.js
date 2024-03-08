import Project from "#src/models/Projects";

const exposeServices = {

    findOneProject: async ({id:_id})=>{
        try {
            const   oneProject = await Project.findOne({_id})
            return  oneProject
        } catch (error) {
            throw new Error(error)
        }
    },
    findAllProjects: async ()=>{
        try {
            const   allProject = await Project.find()
            return  allProject
        } catch (error) {
            throw new Error(error)
        }
    },
    createProjects: async (rawData)=>{

        try {
            const   projectToSave  = new Project(rawData)
            const   newProject     = projectToSave.save()   
            return  newProject
        } catch (error) {
            throw new Error(error)
        }
    },
    updateProject: async ({id,body})=>{

        try {
            const   updatedProject  = await Project.findOneAndUpdate(
                {_id:id},
                body,
                {new:true}
            ) 
            return  updatedProject
        } catch (error) {
            throw new Error(error)
        }
    },
    patchProject: async ({id,body})=>{
        //TODO: rendre dynamique l'attribution du addToSet
        const {
            categories=false,
            ...rest
        } = body
        const updateQ = {
            $addToSet:{
                categories:{
                    $each:categories
                }
            },
            ...rest
        }
        try {
            const   patchProject  = await Project.findOneAndUpdate(
                {_id:id},
                updateQ,
                {new:true}
            ) 
            return  patchProject
        } catch (error) {
            throw new Error(error)
        }
    },
    
    removeProject: async ({id}) => {
        try {
            const removeProject = await Project.findOne({id}).remove();
            return removeProject;
        } catch (error) {
            throw new Error(error);
        }
    }

}



export default exposeServices