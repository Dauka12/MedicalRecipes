import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setPaginationPage } from '../../Redux/Slices/filterSlice';
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

function Pagination() {
  const { pagination } = useSelector(state => state.filter);
  const dispatch = useDispatch() 
  const setCurrentPage = (value) => {
    dispatch(setPaginationPage(value))
  }
  
  return (
    <div >
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event=>setCurrentPage(event.selected+1)}
        pageRangeDisplayed={5}
        pageCount={3}
        forcePage={pagination-1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
