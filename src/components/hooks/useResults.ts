import { TResult, TSong } from 'types'

export default function useResults() {
  function getResults(search: string, callback: (songs: TSong[]) => void) {
    DZ.api(`/search?q=${search}`, searchRes => {
      searchRes.data &&
        DZ.api(`/artist/${searchRes.data[0].artist.id}`, artistRes => {
          const followers = artistRes.nb_fan

          const data: TSong[] = searchRes.data.map((item: TResult) => {
            return {
              id: item.id,
              title: item.title_short,
              cover: item.album.cover_medium,
              audio: item.preview,
              artist: {
                name: item.artist.name,
                img: item.artist.picture_xl,
                followers: followers.toLocaleString('en-US'),
                link: item.artist.link
              },
              album: {
                name: item.album.title
              }
            }
          })

          callback && callback(data)
        })
    })
  }

  return getResults
}
