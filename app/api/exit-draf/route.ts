import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  (await draftMode()).disable();
  redirect("/");
  // return new Response("Draft mode is disabled");
}