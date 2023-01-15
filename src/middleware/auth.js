const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const verify = jwt.verify(token, 'vivekuserloginsecrettoken');
        
        // if(verify.userType == 'admin'){
        //     next();
        // }else{
        //     return res.status(401).json({
        //     msg: 'not admin'
        //     })
        // }
        next();
    }
    catch(err){
        return res.status(401).json({
            msg: 'invalid token'
        })
    }
}