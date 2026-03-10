import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try{
        const body = await request.json();

        const response = await fetch("https://teachapt-backend-production.up.railway.app/auth/login", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return NextResponse.json(data, {
            status: response.status,
        });
    } catch (error: any) {
       return NextResponse.json(
        { message: error.message },
        { status: 500 }
    );
  }
}