import NextAuth from "next-auth";
import { options } from "../[...nextauth]/options";

const handler = NextAuth({
    ...options,
    debug: true,
});

export { handler as GET, handler as POST };