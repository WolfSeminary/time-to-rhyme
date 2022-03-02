import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
    ListItemSecondaryAction,
    styled,
    Typography,
    Grid,
    ListItemText,
    ListItemIcon,
    ListItem,
    List
} from '@mui/material';



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
export default function RhymesList({ arrOfRhymes }) {
    const [dense, setDense] = useState(false);
    const [open, setOpen] = useState(false);
    const [secondary, setSecondary] = useState(false);
    return (
        arrOfRhymes.map((item, index) =>
            (
                <>
                    {index < 10 ?
                        <div >
                            <Grid item xs={12} md={6} placeholder="trt">
                                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" placeholder="Rhyme">
                                </Typography>
                                <Demo>
                                    <List dense={dense}>
                                        {generate(
                                            <ListItem>
                                                <ListItemIcon></ListItemIcon>
                                                <ListItemText
                                                    primary={item.word}
                                                    secondary={secondary ? 'Secondary text' : null}
                                                />
                                                <ListItemSecondaryAction>
                                                    <ContentCopyIcon onClick={() => { setOpen(true); navigator.clipboard.writeText(item.word) }} />
                                                </ListItemSecondaryAction>
                                            </ListItem>,
                                        )}
                                    </List>
                                </Demo>
                            </Grid>
                        </div> : null}</>)))
}