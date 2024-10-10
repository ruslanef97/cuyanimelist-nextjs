const HeaderPage = ({ title, subTitle }) => {
    return (
        <div className="px-4 py-8">
            <div className="relative h-[150px] bg-gradient-to-tr from-color-third via-color-sunglow to-color-deepShaffron rounded-lg">
                <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

                    <h1 className="text-2xl md:text-4xl font-bold text-white">
                        {title}
                    </h1>
                    <p className="text-gray-300">
                        {subTitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderPage