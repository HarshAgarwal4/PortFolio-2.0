import { useEffect } from 'react'
import Routes from './services/Routes'
import {RouterProvider} from 'react-router-dom'
import { useStore } from './zustand/store'

function App() {
  setInterval(() => {
    if(document.designMode === 'on'){
      document.designMode = 'off'
    }
  } , 500)

  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
