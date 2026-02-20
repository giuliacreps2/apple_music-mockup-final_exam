export interface Welcome {
  data: Datum[];
}

export interface Datum {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  isrc: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: Artist;
  album: Album;
  type: DatumType;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: AlbumType;
}

export const AlbumType = {
  Album: "album",
} as const;

export type AlbumType = (typeof AlbumType)[keyof typeof AlbumType];

export interface Artist {
  id: number;
  name: Name;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: ArtistType;
}

export const Name = {
  CalvinHarris: "Calvin Harris",
  DJKhaled: "DJ Khaled",
  Eminem: "Eminem",
  Rihanna: "Rihanna",
} as const;

export type Name = (typeof Name)[keyof typeof Name];

export const ArtistType = {
  Artist: "artist",
} as const;

export type ArtistType = (typeof ArtistType)[keyof typeof ArtistType];

export const DatumType = {
  Track: "track",
} as const;

export type DatumType = (typeof DatumType)[keyof typeof DatumType];
