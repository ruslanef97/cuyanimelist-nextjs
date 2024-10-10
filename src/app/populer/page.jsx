'use client'

import AnimeList from "@/components/AnimeList"
import HeaderPage from "@/components/Utilities/HeaderPage"
import Pagination from "@/components/Utilities/Pagination"
import React, { useEffect, useState } from "react"

const Popular = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?sfw=true&limit=24&page=${page}`)
        const data = await response.json()

        setTopAnime(data);
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <div>
            <HeaderPage title={`ANIME POPULER #${page}`} subTitle="Anime terbaik sepanjang masa"/>
            <section>
                <AnimeList apiData={topAnime}/>
            </section>
            <Pagination 
            page={page} 
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}/>
        </div>
    )
}

export default Popular