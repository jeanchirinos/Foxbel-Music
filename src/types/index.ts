// DATA
export type TResult = {
  id: number
  title_short: string
  preview: string
  artist: {
    id: number
    name: string
    link: string
    picture_xl: string
  }
  album: {
    title: string
    cover_medium: string
  }
}

export type TSong = {
  id: number
  title: string
  cover: string
  audio: string
  artist: {
    name: string
    img: string
    followers: string
    link: string
  }
  album: {
    name: string
  }
}

// CONTEXT
export type TContextComponent = {
  children: JSX.Element | JSX.Element[]
}

export type TCtxtProps = {
  results: TSong[]
  getSongs: (search: string) => void
  currentSong: TSong
  setCurrentSong: (song: TSong) => void
  isPlaying: boolean
  toggleIsPlaying: () => void
  isMuted: boolean
  toggleIsMuted: () => void
}

// STYLED COMPONENTS

export type TFlex = {
  column?: boolean
  fullCenter?: boolean
  justifyCenter?: boolean
  alignCenter?: boolean
  justify?: string
  align?: string
  $wrap?: boolean
  gap?: number
  columnGap?: number
  rowGap?: number
}
