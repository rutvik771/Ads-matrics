import { useRouter } from 'next/router'
import AdminLayout from '@/Components/Admin/AdminLayout'
import Dashboard from '@/Components/Dashboard'

const RouteComponent = () => {
    const router = useRouter()
    const { route, id } = router.query
    const renderComponent = () => {
        switch (route) {
            case 'dashboard':
                return <Dashboard />
            default:
                return <Dashboard/>
        }
    }

    return <AdminLayout>{renderComponent()}</AdminLayout>
}

export default RouteComponent