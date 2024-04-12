'use client'
import BoardList from '@/components/noticeBoardComponents/BoardList'
import Link from 'next/link'

export default function NoticeBoard({ affectionData }) {
  return (
    // 게시글 확인 공간
    <div className='flex h-[500px] w-full flex-col items-center justify-center'>
      {/* 리스트 확인 */}
      <div className='flex h-[400px] w-full flex-col items-center justify-center  gap-y-16'>
        <BoardList affectionData={affectionData} />
      </div>
    </div>
  )
}
