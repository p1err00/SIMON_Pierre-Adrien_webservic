import projectsService from '#src/services/projectsService'


const exposeController = {

    allProjects:async (req,res)=>{
        const {token} = req.body;
        if (!token) return res.status(400).json({message: 'Invalid token'});
        
        const allProjects = await projectsService.findAllProjects()
        return res.json(allProjects)
    },

    oneProject:async (req,res)=>{
        const {params:{id}} = req
        const oneCrea = await projectsService.findOneProject({id})
        if(!oneCrea) return res.sendStatus(404)
        return res.json(oneCrea)
    },

    createProject:async (req,res)=>{
        const {body}  = req

        if (token.role == "admin") {
            try {
                const newCrea = await projectsService.createProjects(body)     
                return res.status(201).json(newCrea)
            } catch (error) {
               return res.status(400).json({message:  error});
            }
        }
        
    },

    updateProject:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        const {token} = req.body;

        if (token.role == "admin") {

            try {
                    const toUpdate = await projectsService.updateProject({id,body})     
                    
                    return res.json(toUpdate)
                } catch (error) {
                return res.sendStatus(400)
                // return res.json({error})
            }
        }
    },

    patchProject:async (req,res)=>{
        const {body}  = req
        const {id}    = req.params
        const {token} = req.body;

        if (token.role == "admin") {

            try {
                
                    const toPatch = await projectsService.patchProject({id,body})     
                    return res.json(toPatch)
                } catch (error) {
                return res.sendStatus(400)
                // return res.json({error})
            }
        }
    },

    removeProject:async (req, res) => {
        const {id} = req.params;
        const {token} = req.body;

        if (token.role == 'admin') {
            try {
                const remove = await projectsService.removeProject({id});
            } catch (error) {
                return res.status(400).json({message: error});
            }
        }
        
    }
}

export default exposeController