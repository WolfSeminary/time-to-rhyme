import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ListItemSecondaryAction, Tooltip } from '@mui/material';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const RhymesList = ({arrOfRhymes}) => {
  const [dense, setDense] = useState(false);
  const [open, setOpen] = useState(false);
  const [secondary, setSecondary] = useState(false);
  return (
    arrOfRhymes.map((item,index)=>
    (
      <>
{index<10?
      
 
    <div >
      <Grid item xs={12} md={6} placeholder="trt">
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" placeholder="Rhyme">
        </Typography>
        <Demo>
          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText
                  primary={item}
                  secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                  <ContentCopyIcon onClick={() => { setOpen(true); navigator.clipboard.writeText(item) }} />

                </ListItemSecondaryAction>
              </ListItem>,

            )}
          </List>
        </Demo>
      </Grid>
      {/* <Tooltip
        open={open}
        title={"Copied to clipboard!"}
        leaveDelay={1500}
        onClose={() => setOpen(false)}
      >
      </Tooltip> */}

    </div>:<></>}</>)))
}
export default RhymesList;