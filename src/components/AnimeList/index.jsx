import Image from "next/image"
import Link from "next/link"

const AnimeList = ({apiData}) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-6 gap-4 px-4">
            {apiData.data?.map((data, index) => {
                return (
                    <Link href={`/${data.mal_id}`} 
                    className="bg-color-light rounded-lg cursor-pointer text-color-secondary hover:text-color-accent hover:scale-105 transition-all"
                    key={index}>
                        <Image 
                        src={data.images.webp.large_image_url} 
                        width={350} 
                        height={350} 
                        alt={data.title} 
                        className="w-full image-cover object-cover rounded-t-lg"/>
                        <h3 className="font-bold lg:text-xl text-sm p-4">{data.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList