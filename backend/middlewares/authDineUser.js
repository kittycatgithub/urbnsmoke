import jwt from 'jsonwebtoken'


const authDineUser = async (req, res, next) => {
    const {token} = req.cookies;
        if(!token){
            return res.json({ success: false, message: "Not Authorized" })
        }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if( tokenDecode.id ){
            // ✅ Ensure req.body exists
            if (typeof req.body !== 'object' || req.body === null) {
                req.body = {};
            }
            req.body.userId =  tokenDecode.id
        } else {
            return res.json({ success: false, message: "Not Authorized" })
        }
        next()

    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}
export default authDineUser