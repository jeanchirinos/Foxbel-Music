import { $, toggleAside } from 'functions'
import styled from 'styled-components'
import { MD } from 'styles/breakpoints'

const sections = [
  {
    title: 'Mi Librería',
    options: ['Recientes', 'Artistas', 'Albums', 'Canciones', 'Estaciones']
  },
  {
    title: 'Playlist',
    options: ['Metal', 'Para bailar', 'Rock 90s', 'Baladas']
  }
]

export default function Aside() {
  function selectOption(e: React.MouseEvent<HTMLButtonElement>) {
    const className = 'option-selected'

    $(`.${className}`)?.classList.remove(className)
    e.currentTarget.classList.add(className)
  }

  return (
    <S_Aside id='menu'>
      <picture>
        <button className='btn-logo' onClick={toggleAside}>
          <img src='/img/Imagotype.webp' alt='Logo' width={180} height={43} />
        </button>
      </picture>
      <nav>
        {sections.map(({ title, options }, index) => (
          <section key={index}>
            <h2>{title}</h2>
            <ul>
              {options.map((option, i) => {
                const isSelectedByDefault = index === 0 && i === 0 ? 'option-selected' : ''

                return (
                  <li key={i}>
                    <button className={isSelectedByDefault} onClick={e => selectOption(e)}>
                      {option}
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </nav>
    </S_Aside>
  )
}
const S_Aside = styled.aside`
  background-color: var(--dark-red-secondary);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 240px;
  max-width: 100%;
  height: calc(100% - 100px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-block: 0 2rem;
  transform: translateX(-100%);
  visibility: hidden;
  transition: transform 0.1s ease-in-out, visibility 0.1s ease-in-out;

  picture {
    display: flex;
    height: 5rem;
    align-items: center;
    margin-bottom: 2rem;
    padding-left: 1.5rem;
  }

  .option-selected {
    color: var(--primary-red);
  }

  &.opened {
    transform: translateX(0);
    visibility: visible;
  }

  nav {
    padding-block: 0 2.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  h2 {
    padding-left: 1.5rem;
  }

  ul {
    list-style: none;
    padding-inline: 0;

    button {
      width: 100%;
      text-align: left;
      padding-left: 1.5rem;

      &:hover {
        color: var(--primary-red);
      }
    }
  }

  @media (min-width: ${MD}) {
    transform: translateX(0);
    visibility: visible;

    .btn-logo {
      pointer-events: none;
    }
  }
`
