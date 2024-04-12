'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
export default function BoardList({ affectionData }) {
  const [content, setContent] = useState('')
  const [chose, setChose] = useState()
  const [title, setTitle] = useState('')
  const [affectionId, setAffectionId] = useState()
  const [chnage, setChange] = useState(false)
  const router = useRouter()

  const deleteHandler = async (id) => {
    const response = await fetch(`http://localhost:3000/api/skateboardSwagger/${id}`, {
      method: 'DELETE',
    })
  }

  const changeHandler = () => {
    setChange(true)
  }

  const handleSubmit = async (event) => {
    const formData = new FormData(event.target)
    const id = affectionId
    const response = await fetch(`http://localhost:3000/api/skateboardSwagger/${id}`, {
      method: 'PUT',
      body: formData,
    })

    const result = await response.json()
    const inner = result

    // setResultResponse(inner.data)

    router.refresh()
  }

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
          <button
            className='h-full w-12'
            onClick={() => {
              setChose(index.affectionPostId)
              deleteHandler(index.affectionPostId)
            }}
          >
            <span>삭제</span>
          </button>

          <button
            className='h-full w-12'
            onClick={() => {
              changeHandler()
              setChose(index.affectionPostId)
              setAffectionId(index.affectionPostId)
            }}
          >
            <span>수정</span>
          </button>

          {chnage && chose === index.affectionPostId && (
            <div>
              <form onSubmit={handleSubmit} className='flex '>
                <div>
                  <input
                    className='ml-2 h-10  w-full text-base text-sm focus:outline-none'
                    type='text'
                    key={index.affectionPostId}
                    id='title'
                    name='title'
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value)
                    }}
                    placeholder='제목 입력'
                  />
                  <input
                    className='ml-2 h-10  w-full text-base text-sm focus:outline-none'
                    type='text'
                    key={index.affectionPostId + 10}
                    id='content'
                    name='content'
                    value={content}
                    onChange={(event) => {
                      setContent(event.target.value)
                    }}
                    placeholder='내용 입력'
                  />
                </div>
                <button type='submit'>저장</button>
              </form>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
