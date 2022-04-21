import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  type: string;
  when: string;
  body: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      id: 1,
      type: "Meeting Schedule",
      when: "3:30PM - 4:20PM",
      body: "Create a headline that is informative and will capture readers",
    },
    {
      id: 2,
      type: "Meeting Schedule",
      when: "03 May 2020",
      body: "Great blog posts don't just happen Even the best bloggers need it",
    },
    {
      id: 3,
      type: "UI Conference",
      when: "10AM Jan, 2021",
      body: "AieWays - A Front-end solution for airlines build with ReactJS",
    },
  ]);
}
