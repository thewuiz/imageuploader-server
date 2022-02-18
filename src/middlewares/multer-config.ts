import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
const extensionesValida = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let extension: string[] = file.mimetype.split("/");
    let image_extension = extension[extension.length - 1];
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + image_extension);
  },
});

const FileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (extensionesValida.includes(file.mimetype)) {
    //correct format
    return cb(null, true);
  } else {
    //wrong format
    return cb(null, false);
  }
};

export = multer({
  storage: storage,
  fileFilter: FileFilter,
}).single("image");
