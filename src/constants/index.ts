import { BiMoviePlay } from "react-icons/bi";

export interface menuProps {
  id: number;
  name: string;
  icon: any;
  url?: string;
  subMenu?: { id: number; name: string; url: string }[];
}

export const menus: menuProps[] = [
  {
    id: 1,
    name: "Movies",
    icon: BiMoviePlay,
    url: "/movies",
  },
  {
    id: 2,
    name: "Trending",
    icon: BiMoviePlay,
    url: "/trending",
  },
  {
    id: 3,
    name: "Driector",
    icon: BiMoviePlay,
    url: "/directors",
  },
  {
    id: 4,
    name: "Actor",
    icon: BiMoviePlay,
    url: "/actor",
  },
  {
    id: 5,
    name: "Genre",
    icon: BiMoviePlay,
    subMenu: [
      {
        id: 6,
        name: "Horror",
        url: "/horror",
      },
      {
        id: 7,
        name: "Thriller",
        url: "thriller",
      },
      {
        id: 8,
        name: "mystery",
        url: "/mystery",
      },
      {
        id: 9,
        name: "Drama",
        url: "/drama",
      },
      {
        id: 10,
        name: "Comedy",
        url: "/comedy",
      },
    ],
  },
];
