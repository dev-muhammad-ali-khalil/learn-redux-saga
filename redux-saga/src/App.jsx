import React from 'react'
import { Bounce, ToastContainer } from 'react-toastify'
import Layout from './components/Layout'

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
      <Layout />
    </>
  )
}

export default App