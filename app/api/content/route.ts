import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const data = {
    name: "Zaheen",
    gender: "Male",
    education: "Noida Institute of Engineering and Technology",
    qualification: "BTech",
    image: "/images/zaheen.jpg",
  };
  return NextResponse.json(data);
}
