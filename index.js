import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/user-route.js'
// import configContainer from './config/localhost.js';
let PORT = 8080;
/**
 *  -------Initialize global variables-------------
 */
// let config = configContainer.loadConfig();
let app = express();
app.use(cors());

/**
 * file upload limit extend body limit
 */
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/*
*   handle json syntax error in request 
*/
app.use(function(err, req, res, next) 
{
  if(err)
  {
    res.status(400).json(response);
  }
  else
  {
    next();
  }
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api',userRoutes)
const server = app.listen(PORT, () => {
  console.log(`Using environment: localhost...`);
  console.log(` API server running on port ${PORT}...\n`);
});