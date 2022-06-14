import React from 'react'

const Header = ({app}) => {
  return (
    <div className='p-5 bg-blue-500 text-white font-bold'>
        Header Updated || {app.name}
    </div>
  )
}

export default Header
