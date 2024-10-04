import AnimeList from "@/components/AnimeList"
import AnimeListHeader from "@/components/AnimeList/Header"

export async function generateMetadata({ params }) {
  const { keyword } = params
  
  return {
    title: `Hasil pencarian untuk ${keyword}... | RaNimeLIST`,
    description: `Halaman daftar anime untuk hasil pencarian ${keyword}...`
  }
}

const Page = async ({ params }) => {
  const { keyword } = params
  const apiCallSearchAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}&sfw=true`)
  const callbackSearchAnime = await apiCallSearchAnime.json()

  return (
    <>
      {/* Search Anime */}
      <section>
        <AnimeListHeader title={`Hasil pencarian untuk ${keyword}...`}/>
        <AnimeList apiData={callbackSearchAnime} />
      </section>
    </>
  );
}

export default Page