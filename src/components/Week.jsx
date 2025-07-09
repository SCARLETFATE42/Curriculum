import { ActionIcon, Box, Button, Group, Text, TextInput } from '@mantine/core'
import { Icon } from 'lucide-react'
import { IconAt } from '@tabler/icons-react';
import React from 'react'
import Contentmodal from './Contentmodal';
import { useDisclosure } from '@mantine/hooks';

const Week = () => {
    const icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/><path d="m15 5 3 3"/></svg>;
    const trash = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>;
    const cross =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>;
    const [opened, { open, close }] = useDisclosure(false);
    return (
    <>
        <Contentmodal opened={opened} close={close} />
        <Group p={5} justify="space-between" className='w-full !border !border-[#D0D5DD] !rounded-[4px] !p-5'>
            <Box className='flex items-center justify-between gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141b34" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu">
            <path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
            <Text>Week 1:</Text>
            <TextInput
            className='relative'
            width={20}
            rightSectionPointerEvents=""
            rightSection={
              <>
              <Box className='absolute flex right-1.5'>
                 <ActionIcon variant="subtle" aria-label="Settings">
                {icon}
              </ActionIcon>
              <ActionIcon variant="subtle" aria-label="Settings">
                {trash}
              </ActionIcon>
              </Box>
              </>
            }
        placeholder="Enter Title"
      />
            </Box>
            <Box>
                <Button leftSection={cross} className='!bg-white !text-black !border !border-[#BECAD7]' onClick={open}>Add content</Button>
            </Box>
        </Group>
    </>
  )
}

export default Week
