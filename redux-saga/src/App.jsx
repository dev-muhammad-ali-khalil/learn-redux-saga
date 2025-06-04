import React from 'react'
import Users from './components/Users'
import { Bounce, ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnHover
        transition={Bounce} />
      <Users />
    </>
  )
}

export default App