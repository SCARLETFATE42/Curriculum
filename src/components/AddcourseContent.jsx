import { Box, Stack, Text } from "@mantine/core"
import Topbar from "./Topbar"
import Curriculum from "./Curriculum"

const AddcourseContent = () => {
  return (
    <>
       <Stack className="m-6 p-6 w-[1165px] min-w-[400px] items-center justify-center gap-8 rounded-3xl bg-white shadow-sm">
        <Topbar />
        <Curriculum />
        <Box className="flex items-center justify-between m-6">
          <button className="px-3 py-2.5 flex items-center justify-center rounded-[6px] border border-[#E1E7EF] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" 
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/></svg>
            Prev
            </button>
          <button className="bg-[#FFD700] py-2.5 pl-[13.83px] pr-[14.172px] rounded-[6px]">Preview course</button>
        </Box>
       </Stack>
    </>
  )
}

export default AddcourseContent
