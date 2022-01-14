import {
	fetchCompleteRegistration,
	fetchUpdateUser,
	fetchUser,
	fetchUserProfile,
} from "@lib/helpers/axiosApi";
import { User, UserProfileDTO } from "@lib/types";
import { client } from "@pages/_app";
import { useMutation, useQuery } from "react-query";

export function useUserQuery(initialData?: User) {
	return useQuery<User>("user", { queryFn: () => fetchUser(), initialData });
}

export function useUserProfileQuery(id: string, initialData?: User) {
	return useQuery<User>(["user-profile", id], { queryFn: () => fetchUserProfile(id), initialData });
}

export function useCompleteRegistrationMutation(callback: () => void) {
	return useMutation({
		mutationFn: (data: UserProfileDTO) => fetchCompleteRegistration(data),
		onSuccess: () => callback(),
	});
}

export function useUpdateUserMutation() {
	return useMutation({
		mutationFn: (data: UserProfileDTO) => fetchUpdateUser(data),
		onSuccess: (data) => {
			client.setQueryData("user", data);
		},
	});
}
