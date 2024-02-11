import { Dispatch, SetStateAction } from "react";

export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
export interface ICard {
  user: IUser;
  imgURL: string;
  type: CardType;
}

export interface IInfoContainer {
  user: IUser | undefined;
  isHeaderProfile?: boolean;
}

export type CardType = "Stories" | "Trending";

export interface INavBarProps {
  setShowFiltered: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
}
export interface IPostsProps {
  showFiltered: boolean;
  search: string;
}
export interface IListingProps {
  showFiltered: boolean;
  search: string;
}
export interface ITrendingProps {
  search: string;
}
