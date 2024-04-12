import React from 'react'
import './CommonTable.css'

const CommonTable = (props) => {
  const { headersName, children } = props

  return (
    <table className='mx-auto w-80 border-collapse text-center'>
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return (
              <td className='border-b border-gray-200 px-0 py-2 text-base font-bold' key={index}>
                {item}
              </td>
            )
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export default CommonTable
