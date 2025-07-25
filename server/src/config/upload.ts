import multer from "multer";
import path, { dirname } from "node:path";
import crypto from "node:crypto";

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.join(TMP_FOLDER, "uploads");

const MAX_SIZE = 3;
const MAX_FILE_SIZE = 1024 ** 2 * MAX_SIZE;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(12).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

export default {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
  MAX_SIZE,
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
};
