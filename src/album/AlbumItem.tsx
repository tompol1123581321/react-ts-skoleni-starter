import React from "react";

export type Album = { id: string; title: string; rating: number };

type Props = { album: Album; onChange: (arg: Album) => void };

export const AlbumItem: React.FC<Props> = React.memo(({ album, onChange }) => {
  const handleChange = (change: Partial<Album>) => {
    onChange({
      ...album,
      ...change,
    });
  };

  return (
    <p>
      Title:
      <input
        value={album.title}
        onChange={(e) => handleChange({ title: e.target.value })}
      />
      Rating
      <input
        type="number"
        value={album.rating}
        onChange={(e) => handleChange({ rating: Number(e.target.value) })}
      />
    </p>
  );
});
