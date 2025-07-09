import { Box } from '@mantine/core'
import './App.css'
import AddcourseContent from './components/AddcourseContent'
import Topbar from './components/AddcourseContent'

function App() {

  return (
    <>
    <Box className='flex items-start justify-center w-full h-screen bg-[#F7F7F7]'>
      <AddcourseContent />
    </Box>
    </>
  )
}

export default App
