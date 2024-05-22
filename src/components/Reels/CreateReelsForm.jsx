import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Typography, Snackbar, Box, Paper, IconButton } from '@mui/material';
import { CloudUpload, Movie, InsertEmoticon } from '@mui/icons-material';
import MuiAlert from '@mui/material/Alert';
import emojiList from '../Post/emojiList';
import { createReels } from '../../Redux/Reels/reels.action';
import { uploadToCloudinary } from '../../Utils/upLoadToCloudniry';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EmojiPicker from 'emoji-picker-react';
import { Navigate, useNavigate } from 'react-router-dom';

const CreateReelsForm = () => {
    const [video, setVideo] = useState(null);
    const [title, setTitle] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate()
    const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleEmojiClick = (emoji) => {
        const emojiString = emoji.emoji;
        setTitle((prevTitle) => prevTitle + emojiString);
    };

    const handleOpenSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleSubmit = async () => {
        try {
            if (!video) {
                console.error('Video is required');
                return;
            }

            // Upload video to Cloudinary
            const videoUrl = await uploadToCloudinary(video, 'video');

            // Create reel with video URL and title
            const reelData = { video: videoUrl, title };
            dispatch(createReels(reelData));

            // Reset form after successful submission
            setVideo(null);
            setTitle('');
            // Open success Snackbar
            handleOpenSnackbar();
        } catch (error) {
            console.error('Error creating reel:', error);
        }
    };
    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label className='flex mt-5 gap-6 justify-center hover:underline' htmlFor="video-upload" style={{ cursor: 'pointer' }}>
                        <CloudUploadIcon fontSize="large" />
                        <Typography variant="body1" >Upload Video</Typography>
                    </label>
                    <input
                        id="video-upload"
                        type="file"
                        accept="video/*"
                        style={{ display: 'none' }}
                        onChange={handleVideoChange}
                    />
                </div>
                {video && (
                    <div style={{ marginTop: '20px' }}>
                        <video className='rounded-md' controls width="400" height="300">
                            <source src={URL.createObjectURL(video)} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
                <div style={{ marginTop: '20px' }}>
                    <TextField
                        id="title"
                        label="Caption"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={6}
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <Button className='create-reels' variant="contained" color="primary" onClick={handleSubmit}>Create Reel</Button>
                    <IconButton onClick={toggleEmojiPicker}>
                        <InsertEmoticonIcon className='text-yellow-400' />
                    </IconButton>
                </div>
                {showEmojiPicker && (
                    <div className="emoji-picker">
                        <div className="overflow-auto max-h-80 w-96 max-w-3xl flex flex-wrap cursor-pointer text-lg">
                            <div className='absolute bottom-[10%] right-[1%] '>
                                {showEmojiPicker && (
                                    <div className="">
                                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                >
                    <MuiAlert
                        elevation={6}
                        variant="filled"
                        onClose={handleCloseSnackbar}
                        severity="success"
                    >
                        Reel created successfully!
                    </MuiAlert>
                </Snackbar>
            </Paper>
        </Box>
    );
};

export default CreateReelsForm;
