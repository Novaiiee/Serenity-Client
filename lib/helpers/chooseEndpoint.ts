import { PostPaginateQuery } from "@lib/types";

export function chooseEndpoint({ tag, query, limit, page }: PostPaginateQuery) {
	if (tag !== "") return `/posts/tag/${tag}?limit=${limit}&page=${page}`;
  else if (query !== "") return `/posts/search/${query}?limit=${limit}&page=${page}`;
    
	else return `/posts/recent?limit=${limit}&page=${page}`;
}
