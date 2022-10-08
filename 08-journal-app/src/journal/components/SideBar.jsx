import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const SideBar = ({drawerWidth}) => {
    return (
        <Box
            component='nav'
            sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'> Luis Lopez </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {
                        ['enero','febrero','marzo','abril'].map( text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/> 
                                        <Grid container>
                                            <ListItemText primary={ text }/>
                                            <ListItemText secondary={ '' }/>
                                        </Grid>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
