import styled from 'styled-components'
import { FiMoreVertical } from 'react-icons/fi'
import { useDeezer } from 'context/DeezerContext'
import MainCover from 'components/Atoms/MainCover'
import { SM } from 'styles/breakpoints'

export default function Results() {
  const { results } = useDeezer()

  return (
    <S_Results>
      <h3>Resultados</h3>
      <div>
        {results?.map((song, i) => (
          <article key={i}>
            <picture className='cover'>
              <MainCover song={song} />
              <button className='more' aria-label='Mas información'>
                <FiMoreVertical />
              </button>
            </picture>
            <p className='bold'>{song.title}</p>
            <p className='light'>{song.artist.name}</p>
          </article>
        ))}
      </div>
    </S_Results>
  )
}

const S_Results = styled.section`
  padding-inline: var(--inline-padding);
  margin-top: 2.5rem;

  h3 {
    color: var(--primary-red);
    margin-bottom: 2rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 25px 22px;
    justify-items: center;

    @media (min-width: ${SM}) {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      justify-items: left;
    }
  }

  .cover {
    display: block;
    position: relative;

    button {
      padding: 0;
    }

    svg {
      color: white;
    }

    .more {
      font-size: 1.5rem;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
