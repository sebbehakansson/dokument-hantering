import { dbQuery } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const result = await dbQuery({
        query: `SELECT * FROM dokument WHERE dokument.id = ${params.id}`,
        values: [],
    });
    return NextResponse.json(result);
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const { id } = params;
    console.log(id);
    const result = await dbQuery({
      query: "DELETE FROM dokument where id = " + id,
      values:[]
    });
    return NextResponse.json(result, { status: 200 });
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const data = await req.json();
    const { id } = params;

    const result = await dbQuery({
      query: `UPDATE dokument SET title="${data.title}",description="${data.description}" WHERE id=${id}`,
      values:[]
    });
    return NextResponse.json(result, { status: 200 });
}