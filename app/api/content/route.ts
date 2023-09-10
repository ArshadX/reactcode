import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = {
    name: "Zaheen",
    gender: "Male",
    education: "Noida Institute of Engineering and Technology",
    qualification: "BTech",
    image: "/images/zaheen.jpg",
    user: process.env.DB_USER,
  };
  return NextResponse.json(data);
}
