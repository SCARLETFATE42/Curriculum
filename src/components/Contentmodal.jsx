import React from 'react'
import { Box, Modal, Text, Button, Image } from '@mantine/core';
import playListIcon from '../assets/play-list.svg';
import catalogueIcon from '../assets/catalogue.svg';

const Contentmodal = ({ opened, close }) => {
  return (
    <Modal size={'640px'} radius={'8px'} opened={opened} onClose={close} centered classNames={{ body: 'px-8 py-10' }}>
      <Box className="flex flex-wrap items-start justify-between gap-4 px-8 py-10">
        <Box className="flex flex-col items-start justify-center gap-2">
          <Text className="!text-2xl !font-bold">Add Content</Text>
          <Text className="!text-[#4F4F4F] !text-[13px] !font-normal">Select the type of content you want to add</Text>
        </Box>
      </Box>
      <Box className="flex flex-wrap items-stretch justify-start gap-x-8 gap-y-12 px-4 py-10">
        <Box className="flex flex-col items-center w-[113px] gap-2">
          <Button w={80} h={80} variant="filled" color="#EAECF0" radius="8px">
            <img src={playListIcon} alt="" />
          </Button>
          <Text mt={8} size="sm">Video</Text>
        </Box>
        <Box className="flex flex-col items-center w-[113px] gap-2 relative">
          <Button w={80} h={80} variant="filled" color="#EAECF0" radius="8px">
            <img src={catalogueIcon} alt="" />
          </Button>
          <Text mt={8} size="sm">Assessment</Text>
        </Box>
        <Box className="flex flex-col items-center w-[113px] gap-2 relative">
          <Button className="p-[24px]" w={80} h={80} variant="filled" color="#EAECF0" radius="8px">
            <img src="/src/assets/folder-03.svg" alt="" />
          </Button>
          <Text mt={8} size="sm">Document/File</Text>
        </Box>
        <Box className="flex flex-col items-center w-[113px] gap-2 relative">
          <Button className="p-6" w={80} h={80} variant="filled" color="#EAECF0" radius="8px">
             <img src="/src/assets/folder-03.svg" alt="" />
          </Button>
          <Text mt={8} size="sm">Live Class</Text>
        </Box>
        <Box className="flex flex-col items-center w-[113px] gap-2 relative">
          <Button p={24} w={80} h={80} variant="filled" color="#EAECF0" radius="8px">
            <img src="/src/assets/folder-03.svg" alt="" />
          </Button>
          <Text mt={8} size="sm">Practice Project</Text>
        </Box>
      </Box>
    </Modal>
  );
}

export default Contentmodal
