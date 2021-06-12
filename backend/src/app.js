import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import exprssValidator from 'express-validator';



const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
// routing info
app.use(morgan('dev'));
// validate 
app.use(exprssValidator());

/// routing

app.use('/', routes);

app.use((req,res,next)=>{
    const err = new Error ('not found');
    err.status=404;
    next(err);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
})
export default app;