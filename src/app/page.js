import AnimeList from "@/app/components/AnimeList";

const Home = async () => {
  
  const apiCallTopAnime = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?rating=r&sfw=false&limit=6`)
  const callbackTopAnime = await apiCallTopAnime.json()

  return (
    <div>
      <h1>PALING POPULER</h1>

      <div className="grid grid-cols-3 gap-4 h-32">
      {callbackTopAnime.data.map(data =>{
        return <AnimeList title={data.title} images={data.images.webp.image_url}/>
      })}
      </div>
    </div>
  );
}

export default Home