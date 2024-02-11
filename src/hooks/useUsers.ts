import { useQueryClient, useQuery } from "react-query";
import { getUsers } from "../service";

export function useGetUsers() {
  const client = useQueryClient();
  return useQuery("user", async () => {
    const users = await getUsers();

    for (const user of users) {
      client.setQueryData(["user", user.login.uuid], user);
    }

    return users;
  });
}
