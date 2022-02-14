import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC } from "react";

const Buy: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        _hover={{ bg: "#0565fd" }}
        color="white"
        bg="#0565fd"
        onClick={onOpen}
      >
        Buy DEV
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buy DEXs from multiple networks.</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Button>
              <Link
                href="https://quickswap.exchange/#/swap?outputCurrency=0xA5577D1cec2583058A6Bd6d5DEAC44797c205701"
                isExternal
              >
                Polygon
              </Link>
            </Button>
            <Button>Arbitrum</Button>
            <Button>Ethereum</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { Buy };
