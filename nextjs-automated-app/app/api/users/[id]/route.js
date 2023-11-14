import {user} from "../../../../utils/db"
import { NextResponse } from "next/server";

export async function GET(request, content) {
    const userId = content.params.id;
    const data = user.filter(item => item.id == userId);
  return NextResponse.json(data, {status:200})
}
