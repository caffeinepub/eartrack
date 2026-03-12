import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetTotalSignups() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["totalSignups"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getTotalSignups();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSignupWaitlist() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.signupWaitlist(email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["totalSignups"] });
    },
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContactForm(name, email, message);
    },
  });
}
