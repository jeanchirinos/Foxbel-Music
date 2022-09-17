import styled from 'styled-components'
import { FaUserAlt } from 'react-icons/fa'
import Search from '../Atoms/Search'
import { toggleAside } from 'functions'
import { MD, SM } from 'styles/breakpoints'
import ThemeSwitcher from 'components/Atoms/ThemeSwitcher'

export default function Header() {
  return (
    <S_Header>
      <button className='menu-btn' aria-label='Abrir menú' onClick={toggleAside}>
        <img src='/img/Isotype.webp' alt='Logo' width={32} height={27} />
      </button>
      <Search />
      <aside>
        <nav className='user' aria-label='Usuario'>
          <ThemeSwitcher />
          <FaUserAlt />
          <p>Francisco M.</p>
        </nav>
      </aside>
    </S_Header>
  )
}

const S_Header = styled.header`
  --show-md: none;
  --show-lg: none;
  --hide-md: block;
  --hide-lg: block;

  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0px;
  backdrop-filter: blur(16px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  padding-inline: var(--inline-padding);
  z-index: 9;

  .menu-btn {
    display: var(--hide-lg);
  }

  aside {
    display: flex;
    column-gap: 12px;
  }

  p {
    display: var(--show-md);
  }

  .user {
    flex-shrink: 0;
    display: flex;
    column-gap: 12px;
  }

  @media (min-width: ${SM}) {
    --show-md: block;
    --hide-md: none;
  }

  @media (min-width: ${MD}) {
    --hide-lg: none;
    left: 240px;
    width: calc(100% - 250px);
  }

  svg {
    color: var(--primary-red);
  }
`
