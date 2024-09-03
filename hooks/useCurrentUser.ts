import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

function useCurrentUser() {
    const user = useQuery(api.User.getCurrentUser);
    const isLoading = (user === undefined);

    return { user, isLoading };
}

export { useCurrentUser };