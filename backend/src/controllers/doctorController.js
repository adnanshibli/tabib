import models from '../models';
import sequelize from 'sequelize';



const Op = sequelize.Op;


export const index = async (req,res)=>{
    let {q}= req.query;
    const searchQuery = q ? {name: {[Op.like]: `%${q.replace(' ',"")}%`}}: {};
    try {
     const doctor = await models.User.findAll({
         where: {userType: 'doctor', ...searchQuery},
         include: [{model: models.Profile, as: 'profile'}],
         attributes: {exclude: ['password']}
     })
     res.status(200).json(doctor);
    }catch(e){
          res.status(500).json(e);
    }
}

