import NextAuth from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const handler = NextAuth(options);

export const auth = handler.auth;
export const GET = handler.GET;
export const POST = handler.POST;