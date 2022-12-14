import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display:'flex' }}>

        <Navbar drawerWidth = {drawerWidth}/>
        <SideBar drawerWidth = {drawerWidth}/>
        <Box
            componenet='main'
            sx={{ flexGrow : 1, p:3 }}
        >
            <Toolbar/>
            
            { children }
        </Box>
    </Box>
  )
}
