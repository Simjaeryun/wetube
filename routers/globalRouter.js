import express from 'express';
import passport from 'passport';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
  githubLogin,
  postGithubLogIn,
  getMe,
} from '../controllers/userController';
import { onlyPublic, onlyPrivate } from '../middlewares/middlewares';

const globalRouter = express.Router();

//Join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

//Login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate('github', { failureRedirect: '/login' }),
  postGithubLogIn
);
globalRouter.get(routes.logout, onlyPrivate, logout);

//Edit
globalRouter.get(routes.me, getMe);

//Global
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

export default globalRouter;
