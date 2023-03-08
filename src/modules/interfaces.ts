export interface IMovie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface IRating {
    Source: string;
    Value: string;
}

export interface IResaultData {
    Search: IMovieShortInfo[]
}

export interface IMovieShortInfo {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IMoviesResult {
    Search: IMovieShortInfo[];
    totalResults: string;
    Response: string;
}

export interface ContainerDataProps {
    movies: IMovieShortInfo[]
}