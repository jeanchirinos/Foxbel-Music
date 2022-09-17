import styled from 'styled-components'
import FirstSong from 'components/Molecules/FirstSong'
import Results from 'components/Molecules/Results'

export default function Main() {
  return (
    <S_Main>
      <FirstSong />
      <Results />
    </S_Main>
  )
}

const S_Main = styled.div`
  padding-block: 2rem calc(100px + 2.5rem);
  grid-area: content;
`
