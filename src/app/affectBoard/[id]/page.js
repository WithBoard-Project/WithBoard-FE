'use client'
import react from 'react'
import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useSearchParams } from 'react-router-dom'
import './boardList.css'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

function createData(name, code, population, size) {
  const density = population / size
  return { name, code, population, size, density }
}

// '글 번호', '제목', '등록일', '내용'
const rows = [
  createData('글 번호', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
]

const columns = [
  { id: 'ID', label: '글 번호', minWidth: 40 },
  { id: 'Title', label: '제목', minWidth: 70 },
  {
    id: 'write_at',
    label: '등록일',
    minWidth: 70,
    align: 'left',
  },
  {
    id: 'content',
    label: '내용',
    minWidth: 0,
    align: 'left',
  },
]

const BoardList = () => {
  const [pageCount, setPageCount] = useState(0)
  const [boardList, setBoardList] = useState([])
  // const [searchParams, setSearchParams] = useSearchParams()

  /* useEffect(() => {
    const getBoardList = async () => {
      const page_number = searchParams.get('page')
      const { data } = await axios.get(`/api/board/list?page_number=${page_number}&page_size=4`)
      return data
    }
    getBoardList().then((result) => setBoardList(result))
    const getTotalBoard = async () => {
      const { data } = await axios.get('/api/board/count')
      return data.total
    }
    getTotalBoard().then((result) => setPageCount(Math.ceil(result / 4)))
  }, []) */

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div className='"opacity-0 items-center" flex flex-col'>
      <div className='text-midnightblue mb-4 text-2xl font-bold'>전체 게시물 📝</div>

      {/* <CommonTable headersName={['글 번호', '제목', '등록일', '내용']}>{content}</CommonTable> */}

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <footer class='fixed bottom-0 left-0 z-20 w-full border-t border-gray-200 bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 dark:bg-gray-800'>
        <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>WithBoard</span>
        <ul class='mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400'>
          <li>
            <a href='#' class='me-4 hover:underline md:me-6'>
              About
            </a>
          </li>
          <li>
            <a href='#' class='me-4 hover:underline md:me-6'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='#' class='me-4 hover:underline md:me-6'>
              Licensing
            </a>
          </li>
          <li>
            <a href='#' class='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
export default BoardList
