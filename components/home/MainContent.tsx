import { Button } from "@components/ui/Button";
import { Post } from "@components/ui/Post";
import { SearchBar } from "@components/ui/SearchBar";
import { usePostsQuery } from "@lib/hooks/postHooks";
import { usePostsStore } from "@lib/store/postsStore";
import { ChangeEvent, FC } from "react";

export const MainContent: FC = () => {
	const tag = usePostsStore((state) => state.tag);
	const query = usePostsStore((state) => state.query);
	const page = usePostsStore((state) => state.page);

	const setPage = usePostsStore((state) => state.setPage);
	const setQuery = usePostsStore((state) => state.setQuery);

	const { data: paginate, isLoading, refetch } = usePostsQuery({ limit: 10, page, query, tag });

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPage(1);
		setQuery(e.target.value);
	};

	return (
		<div className="col-span-8 h-screen main-content bg-gray-100 p-20 overflow-auto flex flex-col items-start">
			<div className="pb-10 flex justify-between w-full">
				<h1 className="font-bold text-5xl">
					{tag === "" && query === "" && "Recent Posts"}
					{tag !== "" && `Tagged: ${tag}`}
					{query !== "" && `Searched: ${query}`}
				</h1>
				<div className="flex items-center space-x-4">
					<button className="bg-violet-500 p-4 rounded-md cursor-pointer" onClick={() => refetch()}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 cursor-pointer"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
							/>
						</svg>
					</button>
					<SearchBar input={query} onChange={onChange} />
				</div>
			</div>
			<div className="flex flex-col space-y-10 items-start w-full">
				{isLoading && <div>Loading</div>}
				{query !== "" && paginate?.posts.length === 0 && <div>No results for {query}</div>}

				{!isLoading &&
					paginate?.posts.map((post) => {
						return <Post post={post} key={post.postID} className="w-full" />;
					})}

				<div className="flex space-x-4">
					<Button color="violet-500" onClick={() => setPage(page + 1)}>
						Next
					</Button>
					<Button color="violet-500" onClick={() => setPage(page - 1)}>
						Back
					</Button>
				</div>
			</div>
		</div>
	);
};
