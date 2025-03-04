
import {
    Box,
    Flex,
    VStack,
    Heading,
    Text,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerContent,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Badge,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiFileText,
    FiUsers,
    FiSettings,
    FiSearch,
    FiPlus
} from 'react-icons/fi'
import SidebarContent from './Sidebar';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }:any) => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" bg='gray.100'>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Box ml={{ base: 0, md: 64 }} p="4">
                <Box>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default AdminLayout
