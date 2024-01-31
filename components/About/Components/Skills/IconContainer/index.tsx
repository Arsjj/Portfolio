import React, { ReactElement } from 'react'

export default function IconContainer({children}: {children: ReactElement}) {
  return (
    <div className='bg-linear p-2 mr-2 rounded-lg text-orange'>{children}</div>
  )
}
