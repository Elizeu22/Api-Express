import jwt from 'jsonwebtoken'


function verificaJwt(req,res,next){

const token = req.headers['authorization'];

if(!token) return res.status(401).json({auth: false,message:'Falha ao receber o token'});


jwt.verify(token,process.env.SECRET,function(err,decoded){
    if(err) return res.status(500).json({auth:false,message:'Falha autenticacao token'});

    next();
});
}




export default verificaJwt 
