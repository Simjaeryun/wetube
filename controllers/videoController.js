//global
import routes from '../routes';
import Video from '../models/Video';

//HOME
export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render('home', { pageTitle: 'Home', videos });
  } catch (error) {
    console.log(error);
    res.render('home', { pageTitle: 'Home', videos: [] });
  }
};

// SEARCH
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: 'i' },
    });
  } catch (error) {
    console.log(error);
  }
  res.render('search', { pageTitle: 'Search', searchingBy, videos });
  console.log(searchingBy);
};

//UPLOAD
export const getUpload = (req, res) => {
  res.render('upload', { pageTitle: 'upload' });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title: title,
    description: description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

//VIDEODETAIL
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render('videoDetail', { pageTitle: video.title, video: video });
  } catch (error) {
    console.log(Error);
    res.redirect(routes.home);
  }
};

// EDITVIDEO
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render('editVideo', { pageTitle: `Edit ${video.title}`, video: video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate(
      { _id: id },
      { title: title, description: description }
    );
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

//DELETEVIDEO
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
