import { Request, Response } from "express";
import z, { ZodError } from "zod";
import uploadConfig from "@/config/upload";
import { DiskStorage } from "@/providers/disk-storage";
import { AppError } from "@/utils/AppError";

class UploadsController {
  async create(request: Request, response: Response) {
    const diskStorage = new DiskStorage();
    try {
      const fileSchema = z
        .object({
          filename: z
            .string()
            .min(1, "No file has been attached. It is required."),
          mimetype: z
            .string()
            .refine(
              (type) => uploadConfig.ACCEPTED_IMAGE_TYPES.includes(type),
              `Invalid file format. Valid formats:${uploadConfig.ACCEPTED_IMAGE_TYPES.map(
                (item) => item.replace("image/", " ")
              )}.`
            ),
          size: z
            .number()
            .positive()
            .refine(
              (size) => size <= uploadConfig.MAX_FILE_SIZE,
              `Your file must be exactly ${
                uploadConfig.MAX_SIZE
              } MB or less. The uploaded file size is ${(
                (request.file?.size as number) /
                1024 ** 2
              ).toFixed(3)} MB.`
            ),
        })
        .passthrough();

      const file = fileSchema.parse(request.file);
      const filename = await diskStorage.saveFile(file.filename);

      response.json({ filename });
    } catch (error) {
      if (error instanceof ZodError) {
        if (request.file) {
          await diskStorage.deleteFile(request.file?.filename, "tmp");
        } else {
          throw new AppError(error.issues[0].message);
        }
      }
      throw error;
    }

    response.status(200).json({ file: request.file });
  }
}

export { UploadsController };
