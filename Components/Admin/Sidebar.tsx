import { Box, Flex, Text } from "@chakra-ui/react"
import { FiFileText, FiHome, FiSettings, FiUsers } from "react-icons/fi"
import NavItem from "./NavItem"
import { useRouter } from "next/router";

export default function SidebarContent({ onClose, ...rest }: any) {
  const navItems = [
    { icon: FiHome, name: 'dashboard', route: "/dashboard" },
  ]

  return (
    <Box
      bg='white'
      borderRight="1px"
      borderRightColor='gray.200'
      w={{ base: 'full', md: 60, }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Ad Metrics
        </Text>
      </Flex>
      {navItems.map((nav) => (
        <NavItem key={nav.name} icon={nav.icon}>
          {nav}
        </NavItem>
      ))}
    </Box>
  )
}