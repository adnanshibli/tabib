import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: 'postgres'
    }
);

const models ={
    User: sequelize.import('./user'),
    Profile: sequelize.import('./profile'),

}
Object.keys(models).forEach(key =>{
    if ('associate' in models[key]){
        models[key].associate(models);
    }
})

sequelize.authenticate()
    .then(()=>{
        console.log('connection to database done');
    })
    .catch(err =>{
        console.error('connect to database fail pleeeease noooo',err)
    })

export {sequelize};
export default models;