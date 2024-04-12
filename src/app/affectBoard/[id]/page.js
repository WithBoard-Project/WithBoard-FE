import { Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
// import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import './boardList.css'
import CommonTable from '../components/table/CommonTable'
import CommonTableColumn from '../components/table/CommonTableColumn'
import CommonTableRow from '../components/table/CommonTableRow'

function GetData() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('http://localhost:8080/withboard').then((response) => {
      setData(response.data)
    })
  }, [])

  const item = Object.values(data).map((item) => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn>{item.title}</CommonTableColumn>
      <CommonTableColumn>{item.createAt}</CommonTableColumn>
      <CommonTableColumn>{item.content}</CommonTableColumn>
    </CommonTableRow>
  ))

  return item
}

const BoardList = () => {
  const [pageCount, setPageCount] = useState(0)
  const [boardList, setBoardList] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const item = GetData()

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

  return (
    <div className='"opacity-0 items-center" flex flex-col'>
      <div className='text-midnightblue mb-4 text-2xl font-bold'>전체 게시물 📝</div>

      <CommonTable headersName={['글 번호', '제목', '등록일', '내용']}>{item}</CommonTable>

      <div className='ml-4'>
        <Pagination
          variant='outlined'
          color='primary'
          page={Number(searchParams.get('page'))}
          count={pageCount}
          size='large'
          onChange={(e, value) => {
            window.location.href = `/board-list?page=${value}`
          }}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  )
}
export default BoardList
