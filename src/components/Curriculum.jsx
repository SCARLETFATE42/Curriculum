import { Box, Button, Stack, Text } from "@mantine/core"
import Week from "./Week"

const Curriculum = () => {
    const cross =<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>;
  return (
   <>
    <Stack gap={24} p={20}>
        <Text className="!text-[#1B1C1E] !text-[24px] !font-bold capitalize gap-">Curriculum</Text>
        <Text className="!text-[#4F4F4F] !text-[13px] !font-normal">Start putting together your course by creating sections, lectures and practice activities 
            (<a href="#" className="underline hover:no-underline underline-offset-auto font-stretch-ultra-condensed">quizzes, coding exercises and assignments</a>).
            Use your <a href="" className="underline hover:no-underline underline-offset-auto font-stretch-ultra-condensed">course outline</a> to structure your content and label your sections and lectures clearly.</Text>
            <Week />
            <Button variant="filled" color="rgba(5, 5, 5, 1)" leftSection={cross} className="!w-[15%] !px-4 !py-2.5 !text-[16px] !font-semibold">New week</Button>
    </Stack>
   </>
  )
}

export default Curriculum
