import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

const Buy: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex justify="center" mt={25}>
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
              <VStack gap={2}>
                <Button colorScheme="purple">
                  <Link
                    href="https://quickswap.exchange/#/swap?outputCurrency=0xA5577D1cec2583058A6Bd6d5DEAC44797c205701"
                    isExternal
                  >
                    Polygon
                  </Link>
                </Button>

                <Button bg="#3182ce" colorScheme="white">
                  <Link
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x91F5dC90979b058eBA3be6B7B7e523df7e84e137"
                    isExternal
                  >
                    Arbitrum
                  </Link>
                </Button>

                <Button bg="#171923" colorScheme="white">
                  <Link
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26&use=V2"
                    isExternal
                  >
                    Ethereum
                  </Link>
                </Button>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export { Buy };
