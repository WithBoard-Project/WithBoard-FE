'use client'
import BoardList from '@/components/noticeBoardComponents/BoardList'
import Link from 'next/link'

export default function NoticeBoard({ affectionData }) {
  console.log('<---->')
  console.log(affectionData)

  const deleteHandler = async () => {
    const response = await fetch(
      `http://localhost:3000/api/skateboardSwagger/${affectionData.affectionPostId}`,
      {
        method: 'DELETE',
      },
    )
  }
  return (
    // 게시글 확인 공간
    <div className='flex h-[500px] w-full flex-col items-center justify-center'>
      {/* 리스트 확인 */}
      <div className='flex h-[400px] w-full flex-col items-center justify-center  gap-y-3'>
        <BoardList affectionData={affectionData} />
      </div>
      <div>
        <Link href={'/skateboardSwagger/newSkateboardSwagger'}> 생성하기</Link>
      </div>
      <button
        onClick={() => {
          deleteHandler()
        }}
      >
        삭제하기
      </button>
    </div>
  )
}
