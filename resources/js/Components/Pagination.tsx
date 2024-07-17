import { setCurrentPage } from "@/Redux/features/pokeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook"

function Pagination({ pokeLenght }: {pokeLenght: number}) {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector((state) => state.poke.pagination)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)

  const handlePrevPage = () => {
    if (currentPage > 1) {
        dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };
  if(pokeLenght < 9) return null
  return (
    <div className="pagination flex items-center gap-4 mb-5">
      <button className="prev-btn" type="button" onClick={handlePrevPage}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
        Previous
      </button>
      <div className="flex items-center gap-2">
        {pageNumbers.map((page:number) => (
          <button type="button" className={`page-btn ${currentPage === page && 'active'}`} onClick={() => dispatch(setCurrentPage(page))}>{page}</button>
        ))}
      </div>
      <button className="next-btn" type="button" onClick={handleNextPage}>
        Next
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
        </svg>
      </button>
    </div>
  )
}

export default Pagination
