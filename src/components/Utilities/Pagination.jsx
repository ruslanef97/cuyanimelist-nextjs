const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    
    const handleNextPage = () => {
        const last = lastPage
        const current = page

        if(current == last){
            return
        }else{
            setPage((prevState) => prevState + 1)
            scrollTop()
        }
    }

    const handlePrevPage = () => {
        const current = page

        if(current == 1){
            return
        }else{
            setPage((prevState) => prevState - 1)
            scrollTop()
        }
    }

    const ConditionalWrapper = ({ children, condition }) => {
        return condition ? (
            null
        ) : (
            children
        )
    }
    
    return (
        <div className="my-8">
            <nav className="mb-4 flex justify-center space-x-4" aria-label="Pagination">

            <ConditionalWrapper condition={page == 1}>
                <button className="rounded-lg border border-color-accent px-2 py-2 text-white-700" onClick={handlePrevPage}>
                    <span className="sr-only">Previous</span>
                    <svg className="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd">
                        </path>
                    </svg>
                </button>
            </ConditionalWrapper>

            <span className="rounded-lg border border-color-light bg-color-deepShaffron px-4 py-2 text-white">{page}</span>

            <span className="px-2 py-2 text-white-700">Of
            </span>

            <span className="rounded-lg border border-color-accent px-4 py-2 text-white">{lastPage}</span>

            <ConditionalWrapper condition={page == lastPage}>
                <button className="rounded-lg border border-color-accent px-2 py-2 text-white-700" onClick={handleNextPage}>
                    <span className="sr-only">Next</span>
                    <svg className="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd">
                        </path>
                    </svg>
                </button>
            </ConditionalWrapper>

            </nav>
        </div>
    )
}

export default Pagination