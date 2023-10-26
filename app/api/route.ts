import { dbQuery } from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    const result = await dbQuery({
        query: "SELECT *FROM dokument",
        values: [],
    });
    return NextResponse.json(result)
}

export async function POST(req: Request, res: Response) {
    const data = await req.json();

    try {
        await dbQuery({
            query: `INSERT INTO dokument(title,description,author) VALUES('${data.title}','${data.content}','${data.user}')`,
            values: []
        });
    } catch (error) {
        return NextResponse.json(500);
    }
    
    return NextResponse.json(200);
}

