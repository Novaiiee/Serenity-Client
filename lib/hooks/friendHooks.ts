import { fetchAddFriend, fetchFriendsBasic, fetchIsYourFriend } from "@lib/helpers/api";
import { BasicFriend, BasicUser } from "@lib/types";
import { useMutation, useQuery } from "react-query";

export function useFriendsBasicQuery(initialData?: BasicFriend[]) {
	return useQuery<BasicFriend[]>(["home-friends-list"], { queryFn: () => fetchFriendsBasic(), initialData });
}

export function useIsYourFriendQuery(data: BasicUser) {
	return useQuery<boolean>(["is-your-friend", data], {
		queryFn: () => fetchIsYourFriend(data),
	});
}

export function useAddFriendMutation() {
	return useMutation({
		mutationFn: (id: string) => fetchAddFriend(id),
	});
}
