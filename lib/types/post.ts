export interface Post {
	userID: string;
	postID: string;
	createdAt: string;
	username: string;
	name: string;
	content: string;
	avatar: string;
	tags: string[];
	comments: Comment[];
}

export interface PostPaginate {
	posts: Post[];
	totalPages: number;
	currentPage: number;
}

export interface PostPaginateQuery {
	limit: number;
	page: number;
	tag?: string;
	query?: string;
}

export interface Comment {
	userID: string;
	username: string;
	content: string;
	profilePickLink: string;
	comments: Comment[];
}

export interface CreatePostDTO {
	tags: string[];
	content: string;
	name: string;
}
