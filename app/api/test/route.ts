import { NextResponse } from "next/server";

const headers: HeadersInit = [
  ["Accept", "*/*"],
  ["content-type", "application/json"],
  ["Access-Control-Request-Headers", "*"],
  ["api-key", process.env.DB_Auth],
];
const bodyGET = {
  collection: "emailList",
  database: "subscriptions",
  dataSource: "Cluster0",
  filter: { id: 1 },
};

export async function GET() {
  console.log("Hello");

  const res = await fetch(`${process.env.baseUrl}/action/findOne`, { headers, body: JSON.stringify(bodyGET), method: "POST" });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return NextResponse.json(data);
  }
}

export async function POST(request: Request) {
  console.log("Hello");

  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const bodyPOST = {
    collection: "emailList",
    database: "subscriptions",
    dataSource: "Cluster0",
    filter: { id: 1 },
    update: { $push: { data: email } },
  };
  const res = await fetch(`${process.env.baseUrl}/action/updateOne`, { headers, body: JSON.stringify(bodyPOST), method: "POST" });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
    return NextResponse.json(data);
  }
}
