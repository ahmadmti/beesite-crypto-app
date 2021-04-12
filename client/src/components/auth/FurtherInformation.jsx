import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
export default function FurtherInformation() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50003 11.1701L2.33003 7.00009L0.910034 8.41009L6.50003 14.0001L18.5 2.00009L17.09 0.590088L6.50003 11.1701Z" fill="#002F82" />
                        </svg>

                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum dolor sit amet" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50003 11.1701L2.33003 7.00009L0.910034 8.41009L6.50003 14.0001L18.5 2.00009L17.09 0.590088L6.50003 11.1701Z" fill="#002F82" />
                        </svg>

                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum dolor sit amet" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50003 11.1701L2.33003 7.00009L0.910034 8.41009L6.50003 14.0001L18.5 2.00009L17.09 0.590088L6.50003 11.1701Z" fill="#002F82" />
                        </svg>

                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum dolor sit amet" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50003 11.1701L2.33003 7.00009L0.910034 8.41009L6.50003 14.0001L18.5 2.00009L17.09 0.590088L6.50003 11.1701Z" fill="#002F82" />
                        </svg>

                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum dolor sit amet" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50003 11.1701L2.33003 7.00009L0.910034 8.41009L6.50003 14.0001L18.5 2.00009L17.09 0.590088L6.50003 11.1701Z" fill="#002F82" />
                        </svg>

                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum dolor sit amet" />
                </ListItem>
                
            </List>

        
        </div>
    );

}
