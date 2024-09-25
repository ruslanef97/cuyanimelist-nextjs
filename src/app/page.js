import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {
  
  const apiCallTopAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?rating=r&sfw=false&limit=8`)
  const callbackTopAnime = await apiCallTopAnime.json()

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PALING POPULER</h1>
        <Link href="/populer" className="md:text-xl text-md underline hover:text-red-800 transition-all">Lihat Semua</Link>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 h-32 px-4">
      {callbackTopAnime.data.map(data => {
        return (
          <div key={data.mal_id} className="shadow-xl">
            <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Home