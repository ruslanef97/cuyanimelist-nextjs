import AnimeList from "@/components/AnimeList"
import AnimeListHeader from "@/components/AnimeList/Header"

const Page = async () => {
  
  const apiCallTopAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?sfw=true&limit=8`)
  const callbackTopAnime = await apiCallTopAnime.json()

  const apiCallNewAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?filter=airing&sfw=true&limit=4`)
  const callbackNewAnime = await apiCallNewAnime.json()

  return (
    <>
      {/* Anime Terbaru */}
      <section>
        <AnimeListHeader title="Ongoing" linkHref="/terbaru" linkTitle="Ikuti Sekarang"/>
        <AnimeList apiData={callbackNewAnime} />
      </section>

      {/* Anime Populer */}
      <section>
        <AnimeListHeader title="Anime Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
        <AnimeList apiData={callbackTopAnime} />
      </section>
    </>
  );
}

export default Page