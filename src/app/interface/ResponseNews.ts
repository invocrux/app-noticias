export interface ResponseNews {
    status: string;
    totalResults: number;
    articles: DataArticulos[];
}

export interface DataArticulos {
    source: Source;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: Date;
    content: null | string;
}

export interface Source {
    id: null | string;
    name: string;
}
