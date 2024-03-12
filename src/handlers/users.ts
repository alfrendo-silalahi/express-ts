import { Request, Response } from "express";

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
