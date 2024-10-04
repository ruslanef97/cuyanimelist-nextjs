"use client"

import {MagnifyingGlass} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if(keyword.trim() !== '' && keyword.trim()!== undefined && (event.key === 'Enter' || event.type === 'click')){
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    // const handleKeyInput = (event) => {
    //     if(event.key === 'Enter'){
    //         const keyword = searchRef.current.value
    //         router.push(`/search/${keyword}`)
    //     }
    // }

    return (
        <div className="relative">
            <input 
            placeholder="Cari anime" 
            className="w-full p-2 rounded text-color-secondary"
            ref={searchRef}
            onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} className="text-color-secondary"/>
            </button>
        </div>
    )
}

export default InputSearch