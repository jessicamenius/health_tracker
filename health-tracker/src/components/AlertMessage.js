import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from '@material-ui/lab/Alert';

const AlertMessage = (props) => {
    const [open, setOpen] = React.useState(true);

    function handleClose(event, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                variant="warning"
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                message={props.message}
                action={[

                    <IconButton key="close" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </div>
    );
}

export default AlertMessage
