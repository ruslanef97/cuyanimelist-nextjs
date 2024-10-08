import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">RaNimeLIST</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar