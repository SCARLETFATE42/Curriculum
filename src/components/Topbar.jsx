import { Box, Text } from '@mantine/core'

const Topbar = () => {
  return (
    <>
        <Box className='flex items-center justify-between w-[1117px] h-14 pb-4'>
            <Box className='flex items-center gap-3'>
            <Text className="!text-[14px] !font-normal !text-[#0F1729] flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" 
            stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back</Text>
            <Text className="!text-[#1B1C1E] !font-bold !text-2xl">Front End Web Development</Text>
            <Box className='flex items-center justify-center px-2 py-1 rounded-[2px] bg-[#F7F7F7]'>
                <Text className='!text-[#33658A] !text-[13px] !font-medium'>Draft</Text>
            </Box>
            </Box>
            <button className='py-2 px-5 flex items-center justify-center rounded-[40px] shadow cursor-pointer bg-[#33658A] !text-[16px] !font-medium text-white'>Save to draft</button>
        </Box>
    </>
  )
}

export default Topbar
