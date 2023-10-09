export interface INewsData {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    url: string;
    publishedAt: string;
    source: { name: string };
}

export interface AllNewsState {
    news: INewsData[];
    loading: boolean;
    error: string | null;
}

export interface HeadlinesNewsState extends AllNewsState {}