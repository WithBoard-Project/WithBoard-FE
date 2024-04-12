import Image from 'next/image'
export default function BoardList({ affectionData }) {
  console.log(affectionData)
  return (
    <>
      {affectionData.map((index, key) => (
        <div
          className='flex h-16 w-[80%] flex-row items-center justify-start rounded-lg border p-3'
          key={key}
        >
          {/* 이미지 */}
          <div>
            <Image src={index.imageUrl} width={100} height={100} alt='' />
          </div>
          {/* title, 글 */}
          <div className='flex h-auto w-full flex-col items-center justify-start'>
            <span className='text-base text-lg text-black'>{index.title}</span>
            <span className='text-base text-lg text-black'>{index.content}</span>
          </div>
          <button>
            <span>삭제</span>
          </button>

          <button>
            <span>수정</span>
          </button>
        </div>
      ))}
    </>
  )
}
