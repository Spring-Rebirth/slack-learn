import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

function useGetWorkSpaces() {
    const workSpaces = useQuery(api.workspaces.get);
    const isLoading = (workSpaces === undefined);

    return { workSpaces, isLoading };
}

export { useGetWorkSpaces }