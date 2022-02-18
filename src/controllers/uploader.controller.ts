import { Request, Response } from "express";
import path from "path";
import fs from "fs";

const postImage = async (req: Request, res: Response) => {
  const image = req.file;
  if (image) {
    return res.status(200).send({ status: 200, path: image.filename });
  }
  return res.status(500).send({ status: 500, err: "File upload error" });
};

const getImageUrl = async (req: Request, res: Response) => {
  let image_name = req.params.image;
  let pathImg = path.join(__dirname, `../../images/${image_name}`);

  if (fs.existsSync(pathImg)) {
    return res.sendFile(pathImg);
  }

  return res.status(400).send("Image doesn't exist");
};

export default { postImage, getImageUrl };
