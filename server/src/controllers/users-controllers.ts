import { Request, Response } from "express";
import { UserRole } from "@prisma/client";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { hash } from "bcrypt";
import { AppError } from "@/utils/AppError";

class UsersController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z
        .string()
        .trim()
        .min(2, { message: "Name is a obligatory field." }),
      email: z
        .string()
        .trim()
        .email({
          message: "This e-mail is not valid.",
        })
        .toLowerCase(),
      password: z.string().min(6, {
        message: "The password must contain at least 6 characters.",
      }),
      role: z
        .enum([UserRole.employee, UserRole.manager])
        .default(UserRole.employee),
    });

    const { name, email, password, role } = bodySchema.parse(request.body);

    const userWithSameEmail = await prisma.user.findFirst({ where: { email } });

    if (userWithSameEmail) {
      throw new AppError("This e-mail is already registered.", 400);
    }

    const hashedPassword = await hash(password, 8);

    await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });

    response.status(201).json();
  }
}

export { UsersController };
