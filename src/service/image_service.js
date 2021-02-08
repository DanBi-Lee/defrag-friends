const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

class ImageService {
  uploadImg(formData) {
    return fetch(url, {
      method: "POST",
      body: formData,
    });
  }
}

export default ImageService;
