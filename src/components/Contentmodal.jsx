import React from 'react'
import { Box, Modal, Text } from '@mantine/core';

const Contentmodal = ({ opened}) => {
  return (
    <Modal  size={'md'} opened={opened} onClose={close} centered>
      <Box className="flex flex-col items-center justify-between gap-4">
        <Text className="!text-lg !font-semibold">Add Content</Text>
        <Text className="!text-lg !font-semibold">Select the type of content you want to add</Text>
      </Box>
    </Modal>
  );
}

export default Contentmodal
