import usePlayer from 'components/hooks/usePlayer'
import useResults from 'components/hooks/useResults'
import { createContext, useState, useContext, useLayoutEffect } from 'react'
import { TContextComponent, TCtxtProps, TSong } from 'types'

export const CtxDeezer = createContext({} as TCtxtProps)

export default function DeezerContext({ children }: TContextComponent) {
  const [results, setResults] = useState([] as TSong[])
  const [currentSong, setCurrentSong] = useState({} as TSong)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const { changeSong } = usePlayer()
  const getResults = useResults()

  useLayoutEffect(() => {
    getResults('21', songs => {
      const firstSong = songs[0]

      setResults(songs)
      setCurrentSong(firstSong)
      changeSong(firstSong, false)
    })
  }, [])

  function getSongs(search: string) {
    getResults(search, songs => {
      songs && setResults(songs)
    })
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying)
  }

  function toggleIsMuted() {
    setIsMuted(!isMuted)
  }

  return (
    <CtxDeezer.Provider
      value={{
        results,
        getSongs,
        currentSong,
        setCurrentSong,
        isPlaying,
        toggleIsPlaying,
        isMuted,
        toggleIsMuted
      }}
    >
      {children}
    </CtxDeezer.Provider>
  )
}

export const useDeezer = () => useContext(CtxDeezer)
