import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-red-800">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">CUYANIMELIST</Link>
                <input placeholder="Cari anime" className=""/>
            </div>
        </header>
    )
}

export default Navbar