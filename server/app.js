import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index';
import authRouter from './routes/auth';
import logoutRouter from './routes/logout';
import invitesRouter from './routes/invites';

var app = express();



var app = express()

// enable cors
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/logout', logoutRouter);
app.use('/invites', invitesRouter);
export default app;
