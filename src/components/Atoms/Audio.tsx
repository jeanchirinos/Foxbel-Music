import styled from 'styled-components'

export default function Audio() {
  return (
    <S_Audio>
      <source src='' type='audio/ogg' />
    </S_Audio>
  )
}

const S_Audio = styled.audio`
  position: absolute;
  display: none;
`
