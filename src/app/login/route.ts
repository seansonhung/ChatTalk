import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export function GET(req: Request) {
    return NextResponse.json(
        {
          name: "hello dere",
        },
        {
          status: 200,
          statusText:
            "Mblububu",
        }
      );
}
