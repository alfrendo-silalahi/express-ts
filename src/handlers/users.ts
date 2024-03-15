import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/create-user.dto";
import { CreateUserQueryParams } from "../types/query-params";

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json([
    {
      id: 29,
      username: "alfrendo@users.com",
    },
    {
      id: 17,
      username: "testing@users.com",
    },
  ]);
};

export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  res.status(200).json({
    id,
    username: "alfrendo@users.com",
  });
};

export const createUser = (
  req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  res: Response
) => {};
