import express from 'express';
import routes from '../routes';
import {
  userDetail,
  getEditProfile,
  getChangePassword,
  postChangePassword,
  postEditProfile,
} from '../controllers/userController';

const apiRouter = express.Router();

apiRouter.get(routes.registerView, getEditProfile);


export default apiRouter;
