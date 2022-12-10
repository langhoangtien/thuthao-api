import { diskStorage } from 'multer';
import path = require('path');
import { v4 as uuidv4 } from 'uuid';

type validFileExtension = 'png' | 'jpg' | 'jpeg';
type validMimeType = 'image/png' | 'image/jpg' | 'image/jpeg';
const validFileExtension: validFileExtension[] = ['png', 'jpg', 'jpeg'];
export const validMimeType: string[] = ['image/png', 'image/jpg', 'image/jpeg'];
export const saveImage = {
  storage: diskStorage({
    destination: './public',
    filename: (req, file, callback) => {
      const fileName: string = uuidv4() + path.extname(file.originalname);
      callback(null, fileName);
    },
  }),
  limits: { fileSize: 1000000 },

  fileFilter: function (req, file, callback) {
    // const fileSize = parseInt(req.headers['content-length']);
    // validMimeType.includes(file.mimetype) && fileSize < 1000000
    if (validMimeType.includes(file.mimetype)) {
      return callback(null, true);
    }
    return callback(null, false);
  },
};
