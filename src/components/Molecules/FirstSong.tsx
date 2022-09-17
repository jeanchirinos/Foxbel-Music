import styled from 'styled-components'
import { Flex } from 'styles/StyledComponents'
import { FiMoreHorizontal } from 'react-icons/fi'
import { useDeezer } from 'context/DeezerContext'
import usePlayer from 'components/hooks/usePlayer'
import MainCover from '../Atoms/MainCover'
import { LG } from 'styles/breakpoints'

export default function FirstSong() {
  const { results } = useDeezer()
  const { changeSong } = usePlayer()

  const song = results[0]

  return song ? (
    <S_FirstSong url={song.artist.img}>
      <MainCover song={song} isBig />
      <Flex className='card' column justify='space-between' rowGap={2.5}>
        <div>
          <h2 className='bold'>
            {song.artist.name} {song.title}
          </h2>
          <Flex columnGap={1}>
            <span>Lo mejor de {song.artist.name}</span>
            <span className='followers'>{song.artist.followers} seguidores</span>
          </Flex>
          <p>
            Conóce más de {song.artist.name} en su
            <a href={song.artist.link} target='_blank' rel='noreferrer'>
              <b> perfil</b>
            </a>
          </p>
        </div>
        <Flex className='buttons' justifyCenter gap={1.25} $wrap>
          <button className='main-btn' onClick={() => changeSong(song)}>
            Reproducir
          </button>
          <button className='alt-btn'>Seguir</button>
          <button aria-label='Más información'>
            <FiMoreHorizontal />
          </button>
        </Flex>
      </Flex>
    </S_FirstSong>
  ) : (
    <></>
  )
}

type TProps = {
  url: string
}

const S_FirstSong = styled.section<TProps>`
  display: grid;
  color: white;
  row-gap: 1rem;

  .cover-btn {
    justify-self: center;
  }

  .card {
    padding-block: 2.5rem 1.5rem;
    padding-inline: 2rem;
    position: relative;
  }

  .card::before {
    content: '';
    z-index: -9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)),
      url(${props => props.url});
    opacity: 0.5;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    background-size: cover;
    background-position: center;
  }

  p {
    margin-top: 1rem;
    max-width: 80ch;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .followers {
    color: var(--dark-red-secondary);
  }

  @media (min-width: ${LG}) {
    padding-inline: var(--inline-padding);
    grid-template-columns: auto 1fr;

    .buttons {
      justify-content: start;
    }
  }
`
