import usersService from '#src/services/usersService';


const exposeController = {

    allUsers:async (req,res) => {
        const {token} = req.body;

        if (token.role == 'admin') {
            const allUsers = await usersService.findAllUsers()
            return res.json(allUsers);
        }
    },

    createUser:async (req,res) => {
        const {body}  = req
        try {
                const registeredUser = await usersService.createUser(body)

                return res.json(registeredUser)
            } catch (error) {
               return res.status(400).json({message: error})
        }
    }
}

export default exposeController