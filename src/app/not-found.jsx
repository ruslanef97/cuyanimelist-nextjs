"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex flex-col gap-4 justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <FileSearch size={32} className="text-color-third"/>
                <h3 className="text-color-third text-2xl font-bold">404 | PAGE NOT FOUND :(</h3>
            </div>
            <Link href="/" className="text-color-accent underline">Kembali</Link>
        </div>
    )
}

export default Page