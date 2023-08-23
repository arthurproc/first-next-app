import { find, findAll, create, remove, update } from "@/app/db/todos";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(await findAll());
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTodo = await create(body);
  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const updatedTodo = await update(body);
  return NextResponse.json(updatedTodo);
}

export async function DELETE(request: Request) {
  const body = await request.json();
  await remove(body.id);
  return NextResponse.json({ success: true });
}
