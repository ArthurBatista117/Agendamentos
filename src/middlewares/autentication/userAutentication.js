const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) =>{
    const authHeaders = req.headers['authorization'];
    
    // console.log(token);
    if(!authHeaders){
        console.log('Token inexistente');
        return res.status(403).json({message: 'token inexistente'});
    }
    const parts = authHeaders.split(' ');
    if(parts.length !== 2 || parts[0] !== 'Bearer'){
        return res.status(401).json({message: 'Token em formato inválido'});
    }
    const token = parts[1];

    jwt.verify(token, process.env.SECRET, (err, decode) =>{
        if(err){ 
            console.log('Erro ' + err);
            return res.status(401).json({
                message: 'Houve algum erro inexperado',
                error: err 
            });
        } 
        req.userId = decode.userId;
        next();
    })
}

module.exports = verifyJWT;