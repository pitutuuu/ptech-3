import { Outlet } from 'react-router-dom'
import { Paper } from '@mui/material'
import Menu from './components/Menu'

const Layout = () => {
    return (
        <>
            <Menu />
            <Paper sx={{ marginTop: '100px'}}>
                <Outlet />
            </Paper>
        </>
    )
}

export default Layout