import usePlayer from 'components/hooks/usePlayer'
import { TSong } from 'types'
import { IoPlay } from 'react-icons/io5'
import styled from 'styled-components'

type Props = {
  song: TSong
  isBig?: boolean
}

export default function MainCover({ song, isBig }: Props) {
  const { changeSong } = usePlayer()

  let features: {
    size: number
    loading: 'lazy' | 'eager'
  }

  if (isBig) {
    features = {
      size: 250,
      loading: 'eager'
    }
  } else {
    features = {
      size: 160,
      loading: 'lazy'
    }
  }

  return (
    <S_Button onClick={() => changeSong(song)} className='cover-btn'>
      <img
        src={song.cover}
        alt={`Portada de ${song}`}
        width={features.size}
        height={features.size}
        loading={features.loading}
      />
      <IoPlay className='play-icon' />
    </S_Button>
  )
}

const S_Button = styled.button`
  display: flex;
  position: relative;
`
