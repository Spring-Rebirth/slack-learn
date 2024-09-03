import { query } from "./_generated/server";
import { auth } from "@/convex/auth";

export const getCurrentUser = query({
    args: {/* ... */ },
    handler: async (ctx) => {
        const userId = await auth.getUserId(ctx);
        if (userId === null) {
            throw new Error("Client is not authenticated!")
        }
        const user = await ctx.db.get(userId);
        // ...
        return user;
    },
});