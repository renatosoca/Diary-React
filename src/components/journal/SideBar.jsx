import { Box, Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';
import { TurnedInNotOutlined } from '@mui/icons-material';

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        components='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open={ true }
        sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div' >
            Diario
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            [ 'Entradas', 'Salidas', 'Estadísticas' ].map( ( text, index ) => (
              <ListItem key={ text } disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNotOutlined /> 
                  </ListItemIcon>

                  <Grid container>
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'prueba para ver todo el contenido de el sidebar' } />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
