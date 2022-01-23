import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ListItemSecondaryAction } from '@mui/material';

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
const RhymesList = ({ arrOfRhymes }) => {
    const [dense, setDense] = useState(false);
    const [open, setOpen] = useState(false);
    const [secondary, setSecondary] = useState(false);
    return (
        arrOfRhymes.map((item, index) =>
        (
            <>
                {
                        <Grid item xs={12} md={6} placeholder="trt">
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" placeholder="Rhyme">
                            </Typography>
                            <Demo>
                                <List dense={dense}>
                                    {generate(
                                     index < 10 ?
                                       <div >
                                        <ListItem>
                                            <ListItemIcon></ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                secondary={secondary ? 'Secondary text' : null}
                                            />
                                            <ListItemSecondaryAction>
                                                <ContentCopyIcon onClick={() => { setOpen(true); navigator.clipboard.writeText(item) }} />
                                            </ListItemSecondaryAction>
                                        </ListItem> </div> : <></>,
                                    )}
                                </List>
                            </Demo>
                        </Grid>
                  }</>)))
}
export default RhymesList;
