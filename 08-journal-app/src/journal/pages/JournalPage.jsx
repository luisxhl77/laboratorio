import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography} from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'



export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate harum eligendi, commodi magnam est voluptatum rem quia minima dolores qui omnis nostrum! Quia consectetur, itaque sed commodi in delectus nesciunt.</Typography> */}
      <NothingSelectedView/>
      {/* <NoteView/> */}
      <IconButton
        siza="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ':hover': {backgroundColor: "error.main", opacity: 0.9},
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>

    </JournalLayout>
  )
}
