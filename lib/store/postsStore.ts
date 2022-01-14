import create from "zustand";

interface PostsStore {
	query: string;
	tag: string;
	page: number;
	setTag: (tag: string) => void;
	setQuery: (query: string) => void;
	setPage: (page: number) => void;
	resetTagAndQuery: () => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
	query: "",
	tag: "",
	page: 1,
	setTag: (tag: string) => set({ tag }),
	setQuery: (query: string) => set({ query }),
	setPage: (page: number) => {
		if (page < 1) {
			return set({ page: 1 });
		}

		set({ page });
	},
	resetTagAndQuery: () => set({ tag: "", query: "" }),
}));
