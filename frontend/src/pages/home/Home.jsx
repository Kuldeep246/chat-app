import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdeop-filter backdrop-blur-lg bg-opacity-0 ' >
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
Home