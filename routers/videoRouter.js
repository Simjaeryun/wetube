import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares/middlewares";

const videoRouter = express.Router();

//UPLOAD
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//VIDEO DETAIL
videoRouter.get(routes.videoDetail(), videoDetail); //임의수정

// Edit VIDEO
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//DELETE VIDEO
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
