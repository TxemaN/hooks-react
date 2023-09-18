
import React, { useState } from 'react'



export const usePagina = (initialPage = 1) => {
    const [page, setPage] = useState(initialPage)

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1);

    }
    const prevPage = () => {
       if(page>1) {setPage((prevPage) => prevPage - 1);}

    }

    return {
      nextPage,
      prevPage,
      page
    }
}
