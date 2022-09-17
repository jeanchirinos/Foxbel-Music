import Header from 'components/Molecules/Header'
import MusicPlayer from 'components/Atoms/MusicPlayer'
import { useEffect, useLayoutEffect } from 'react'
import Main from 'components/Organisms/Main'
import Aside from 'components/Atoms/Aside'
import styled from 'styled-components'
import DeezerContext from 'context/DeezerContext'
import Audio from 'components/Atoms/Audio'
import { MD } from 'styles/breakpoints'

export default function App() {
  useLayoutEffect(() => {
    const html = document.documentElement.classList

    if (localStorage.theme) {
      localStorage.theme === 'dark' && html.add('dark')
    } else {
      window.matchMedia('(prefers-color-scheme: dark)').matches && html.add('dark')
    }
  }, [])

  useEffect(() => {
    DZ.init({
      appId: import.meta.env.VITE_APP_ID,
      channelUrl: import.meta.env.VITE_CHANNEL_URL
    })

    document.body.classList.add('with-transition')
  }, [])

  return (
    <DeezerContext>
      <S_Main>
        <Header />
        <Aside />
        <Main />
        <MusicPlayer />
      </S_Main>
      <Audio />
    </DeezerContext>
  )
}

const S_Main = styled.main`
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-areas: 'header' 'content';

  @media (min-width: ${MD}) {
    grid-template-columns: 15rem 1fr;
    grid-template-areas: 'aside header' 'aside content';
  }
`
