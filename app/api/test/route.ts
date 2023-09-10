import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: Request) {
//   console.log("GET");
//   const headers: HeadersInit = [
//     ["Accept", "*/*"],
//     ["content-type", "application/json"],
//     ["Access-Control-Request-Headers", "*"],
//     ["api-key", `${process.env.DB_Auth}`],
//   ];
//   const bodyGET = {
//     collection: "emailList",
//     database: "subscriptions",
//     dataSource: "Cluster0",
//     filter: { id: 1 },
//   };
//   const res = await fetch(`${process.env.baseUrl}/action/findOne`, { headers, body: JSON.stringify(bodyGET), method: "POST" });
//   if (res.ok) {
//     const data = await res.json();
//     console.log(data);
//     return NextResponse.json(data);
//   }
// }

// export async function POST(request: Request) {
//
//   const { searchParams } = new URL(request.url);
//   const email = searchParams.get("email");
//   const bodyPOST = {
//     collection: "emailList",
//     database: "subscriptions",
//     dataSource: "Cluster0",
//     filter: { id: 1 },
//     update: { $push: { data: email } },
//   };
//   const res = await fetch(`${process.env.baseUrl}/action/updateOne`, {
//     headers,
//     body: JSON.stringify(bodyPOST),
//     method: "POST",
//   })
//     .then((res) => res.json())
//     .catch((err) => err.json());
//   return NextResponse.json(res);
// }

export async function GET(request: Request) {
  console.log("POST");
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const res = await fetch(`${process.env.baseUrl}/action/updateOne`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-Key": process.env.DB_Auth,
      "Access-Control-Request-Headers": "*",
      Accept: "*/*",
    },
    body: JSON.stringify({
      collection: "emailList",
      database: "subscriptions",
      dataSource: "Cluster0",
      filter: { id: 1 },
      update: { $push: { data: email } },
    }),
  });
  const data = await res.json();

  return NextResponse.json(data);
}
