var User = require('../model/userModel')
async function list(req,res,next){
    //res.end('User List')
    await User.find()
              .then((data, err)=>{
                if(err){
                    res.status(503).json(err)
                }else{
                    res.status(200).json(data)
                }
              })
}

const create =async (req,res,next)=>{
    const { nom, email } = req.body 
    console.log(req.body.nom);
    console.log(req.params.age)
    const { age } = req.params
    console.log(req.params);
    await new User({
        nom: nom,
        email: email,
        age: age
    }).save()
      .then((err, data)=>{
        if(err){
            console.log("error create User : "+ err);
        }
        console.log(data);
      })
res.json('User added ! nom : '+ nom + ' email : '+ email+ ' age : '+ age)
}

module.exports = { create, list }