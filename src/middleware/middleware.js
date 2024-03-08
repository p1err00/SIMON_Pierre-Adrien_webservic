import jwt from 'jsonwebtoken';


const authMiddleware = {

    jsonDecode:(req, res) => {
        const { token } = req.body;
        const {JWT_KEY} = process.env;

    
        try {
            const decoded = jwt.verify(token, JWT_KEY);
            req.userId = decoded.id;
            console.log(decoded);
            console.log(req.userId);
            return userId;
        } catch (error) {
            res.status(401).json({ error: error });
        }
    },
    
    jsonEncode: (User, res) => {
        const {id, email, role} = User;
    
        const encode = jwt.sign({
            id: id,
            email: email,
            role: role
        });
    console.log(encode);
        return encode;
    }
}

export default authMiddleware;