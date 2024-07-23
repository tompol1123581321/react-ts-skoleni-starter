import { useCallback, useState } from "react";
import { Album, AlbumItem } from "./AlbumItem";

const DEFAULT_ALBUMS_STATE: Array<Album> = new Array(15)
  .fill({
    id: 0,
    title: "",
    rating: 0,
  })
  .map((album, index) => ({ ...album, id: index }));

export const AlbumVoting = () => {
  const [albums, setAlbums] = useState<Array<Album>>(DEFAULT_ALBUMS_STATE);

  const handleChange = useCallback((updatedAlbum: Album) => {
    setAlbums((albums) =>
      albums.map((album) =>
        album.id === updatedAlbum.id ? updatedAlbum : album
      )
    );
  }, []);

  return (
    <div>
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} onChange={handleChange} />
      ))}
    </div>
  );
};
