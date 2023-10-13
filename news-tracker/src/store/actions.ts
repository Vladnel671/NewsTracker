export interface FetchAuthorAction {
    type: 'FETCH_AUTHOR';
    payload: string;
}

export interface FetchTitleAction {
    type: 'FETCH_TITLE';
    payload: string;
}

export interface FetchDescriptionAction {
    type: 'FETCH_DESCRIPTION';
    payload: string;
}

export interface FetchUrlToImageAction {
    type: 'FETCH_URL_TO_IMAGE';
    payload: string;
}

export interface FetchUrlAction {
    type: 'FETCH_URL';
    payload: string;
}

export interface FetchPublishedAtAction {
    type: 'FETCH_PUBLISHED_AT';
    payload: string;
}

export interface FetchSourceAction {
    type: 'FETCH_SOURCE';
    payload: string;
}

export type NewsAction =
    | FetchAuthorAction
    | FetchTitleAction
    | FetchDescriptionAction
    | FetchUrlToImageAction
    | FetchUrlAction
    | FetchPublishedAtAction
    | FetchSourceAction;

export const fetchAuthor = (author: string) => ({
    type: 'FETCH_AUTHOR',
    payload: author
});

export const fetchTitle = (title: string) => ({
    type: 'FETCH_TITLE',
    payload: title
});

export const fetchDescription = (description: string) => ({
    type: 'FETCH_DESCRIPTION',
    payload: description
});

export const fetchUrlToImage = (urlToImage: string) => ({
    type: 'FETCH_URL_TO_IMAGE',
    payload: urlToImage
});

export const fetchUrl = (url: string) => ({
    type: 'FETCH_URL',
    payload: url
});

export const fetchPublishedAt = (publishedAt: string) => ({
    type: 'FETCH_PUBLISHED_AT',
    payload: publishedAt
});

export const fetchSource = (source: string) => ({
    type: 'FETCH_SOURCE',
    payload: source
});