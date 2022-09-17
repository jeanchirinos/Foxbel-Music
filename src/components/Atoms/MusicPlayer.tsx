import styled from 'styled-components'
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPlay, IoPause } from 'react-icons/io5'
import { FaVolumeOff, FaVolumeUp } from 'react-icons/fa'
import usePlayer from 'components/hooks/usePlayer'
import { useDeezer } from 'context/DeezerContext'
import { MD, SM } from 'styles/breakpoints'

export default function MusicPlayer() {
  const { togglePlay, changeVolume, toggleMute } = usePlayer()
  const { isPlaying, isMuted, currentSong } = useDeezer()

  return (
    <S_MusicPlayer>
      <S_Article>
        <img src={currentSong?.cover} alt='Portada de canción' width={100} height={100} />
        <div>
          <p className='bold'>{currentSong?.title}</p>
          <p className='light'>
            {currentSong?.artist?.name} - {currentSong?.album?.name}
          </p>
        </div>
      </S_Article>
      <S_Article>
        <button aria-label='Anterior'>
          <IoPlaySkipBackSharp />
        </button>
        <button className='play' aria-label='Reproducir' onClick={togglePlay}>
          {isPlaying ? <IoPause /> : <IoPlay />}
        </button>
        <button aria-label='Siguiente'>
          <IoPlaySkipForwardSharp />
        </button>
      </S_Article>
      <S_Article>
        <input
          type='range'
          min={0}
          max={100}
          aria-label='Volumen'
          onChange={e => changeVolume(e.target.valueAsNumber / 100)}
        />
        <button aria-label='Silenciar/Activar sonido' onClick={toggleMute}>
          {isMuted ? <FaVolumeOff /> : <FaVolumeUp />}
        </button>
      </S_Article>
    </S_MusicPlayer>
  )
}

const S_MusicPlayer = styled.footer`
  --padding-left: 1rem;
  --padding-right: 1rem;

  width: 100%;
  height: 100px;
  background-color: var(--primary);
  padding-inline: var(--padding-left) var(--padding-right);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  color: white;
  box-shadow: inset 0px -5px 37px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0px -5px 37px rgba(0, 0, 0, 0.2));

  svg {
    font-size: 1.5rem;
  }

  @media (min-width: ${MD}) {
    --padding-left: 0;
    --padding-right: 2rem;
  }
`

const S_Article = styled.article`
  --show-md: none;
  --show-lg: none;

  display: flex;
  column-gap: 20px;
  align-items: center;

  :first-child .bold {
    margin-bottom: 0.5rem;
  }

  :nth-child(2) {
    button {
      display: var(--show-md);
    }

    .play {
      background-color: #ff7676;
      width: 60px;
      aspect-ratio: 1;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  :last-child {
    column-gap: 40px;
    display: var(--show-lg);
  }

  img {
    width: 48px;
    height: 48px;
  }

  input {
    accent-color: white;
    cursor: pointer;

    ::-webkit-slider-thumb {
      margin-top: -5px;
    }

    ::-webkit-slider-runnable-track {
      height: 6px;
      background-color: white;
      border-radius: 100px;
    }
  }

  @media (min-width: ${SM}) {
    --show-md: flex;
  }

  @media (min-width: ${MD}) {
    --show-lg: flex;

    img {
      width: 100px;
      height: 100px;
    }
  }
`
