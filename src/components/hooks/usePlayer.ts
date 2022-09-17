import { useDeezer } from 'context/DeezerContext'
import { $ } from 'functions'
import { useEffect } from 'react'
import { TSong } from 'types'

export default function usePlayer() {
  const { setCurrentSong, isPlaying, toggleIsPlaying, toggleIsMuted } = useDeezer()

  let player = $('audio') as HTMLAudioElement

  useEffect(() => {
    player = $('audio') as HTMLAudioElement
    player.volume = 0.5
  }, [])

  function togglePlay() {
    if (isPlaying) {
      player.pause()
    } else {
      player.play()
    }

    toggleIsPlaying && toggleIsPlaying()
  }

  function toggleMute() {
    player.muted = !player.muted
    toggleIsMuted && toggleIsMuted()
  }

  function changeVolume(volume: number) {
    player.volume = volume
  }

  function changeSong(song: TSong, autoplay = true) {
    if (song.audio === player.src) {
      togglePlay()
      return
    }

    if (!isPlaying) togglePlay()

    player.src = song.audio
    setCurrentSong && setCurrentSong(song)

    if (autoplay) player.play()
  }

  return {
    togglePlay,
    changeVolume,
    changeSong,
    toggleMute
  }
}
