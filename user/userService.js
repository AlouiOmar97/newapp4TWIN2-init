function list(req,res,next){
    res.end('User List')
}

const create = (req,res,next)=>{
    const { nom, email } = req.body 
    console.log(req.body.nom);
    console.log(req.params.age)
    const { age } = req.params
    console.log(req.params);
    
res.json('User added ! nom : '+ nom + ' email : '+ email+ ' age : '+ age)
}

module.exports = { create, list }