import 'dotenv/config';
import models,{sequelize} from './models';
import app from './app';
import validate from './handellers/vallidation'

sequelize.sync().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('express running');
    });
    
});

