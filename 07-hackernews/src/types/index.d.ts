export type HN_SearchHit = {
	created_at: string
	title: string
	url: string
	author: string
	points: number
	story_text: string|null
	comment_text: string|null
	num_comments: number
	created_at_i: number
	objectID: string
}

export type HN_SearchResponse = {
	hits: HN_SearchHit[]
	nbHits: number
	page: number
	nbPages: number
	hitsPerPage: number
}

export type DogAPI_RandomImageResponse = {
	message: string
	status: string
}
