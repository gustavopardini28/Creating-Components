import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import {api} from '../services/api'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenreId: number;
  handleClickButton:(id:number) => void;
}


export function SideBar({selectedGenreId,handleClickButton}: SideBarProps) {
// Complete aqui
useEffect(() => {
  api.get<GenreResponseProps[]>('genres').then(response => {
    setGenres(response.data);
  });
}, []);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
        </nav>
    
  )
}