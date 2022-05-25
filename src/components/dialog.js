import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { savePostApi } from '../api/postService';
import TextField from '@mui/material/TextField';

import { useState } from 'react';

export default function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const [userId, setUserId] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleClose = () => {
        onClose(selectedValue);
    };

    const savePost = async () => {
        const post = {
            userId: userId,
            id: id,
            title: title,
            body: body
        }
        const postData = await savePostApi(post);
        if (postData) {
            console.log(postData);
        }
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>create new Post</DialogTitle>
            <div id="postDteails">
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="userId"
                    variant="filled"
                    size="small"
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="id"
                    variant="filled"
                    size="small"
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="title"
                    variant="filled"
                    size="small"
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="body"
                    variant="filled"
                    size="small"
                />
                <input type="text" value="userId" onChange={(e) => setUserId(e.target.value)} />
                <input type="text" value="id" onChange={(e) => setId(e.target.value)} />
                <input type="text" value="title" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value="body" onChange={(e) => setBody(e.target.value)} />
            </div>
            <button type="submit" onClick={savePost}>save</button>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

