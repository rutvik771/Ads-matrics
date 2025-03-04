import { Flex } from "@chakra-ui/react"
import { useRouter } from "next/router";

export default function NavItem({ icon: Icon, children, ...rest }:any) {
  const router = useRouter();
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: '#8884d8',
        color: 'white',
      }}
      bg={router?.asPath?.includes(children?.name) ? "#8884d8":""}
      color={router?.asPath?.includes(children?.name) ? "white":""}
      gap={2}
      onClick={() => router.push(children?.route)}
      {...rest}
    >
      {Icon && (
        <Icon
          mr="4"
          fontSize="16"
        />
      )}
      {children?.name}
    </Flex>
  )
}