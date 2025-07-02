import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { Category } from "@prisma/client";
import { AppError } from "@/utils/AppError";

class RefundsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(1),
      category: z.enum([
        "food",
        "accommodation",
        "services",
        "transport",
        "other",
      ]),
      amount: z.number().positive({ message: "No negative numbers allowed." }),
      filename: z.string(),
    });

    const { name, category, amount, filename } = bodySchema.parse(request.body);

    if (!request.user?.id) {
      throw new AppError("Unauthorized request.", 401);
    }

    const refund = await prisma.refunds.create({
      data: {
        name,
        category,
        amount,
        filename,
        userId: request.user?.id,
      },
    });

    response.status(201).json(refund);
  }

  async index(request: Request, response: Response) {
    const querySchema = z.object({
      name: z.string().optional().default(""),
    });

    const { name } = querySchema.parse(request.query);

    const refunds = await prisma.refunds.findMany({
      where: {
        user: {
          name: {
            contains: name.trim(),
          },
        },
      },
      orderBy: { createdAt: "asc" },
      include: { user: true },
    });

    response.json(refunds);
  }
}

export { RefundsController };
