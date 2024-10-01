import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-red-800">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">RaNimeLIST</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar