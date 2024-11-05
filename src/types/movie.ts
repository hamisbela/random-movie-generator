export interface Movie {
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  cast?: Array<{ name: string }>;
}

export interface Genre {
  id: number;
  name: string;
}