import { Box, Button, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { createPostAction } from "../../Redux/Post/post.action";
import EmojiPicker from "emoji-picker-react";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const AvatarModal = ({ open, handleClose, selectedImage, handleAvatarConfirmation }) => {
   const [caption, setCaption] = useState("");
   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

   const handleEmojiClick = (emoji) => {
      // Lấy emoji được chọn
      const emojiString = emoji.emoji;
      // Cập nhật nội dung của caption bằng cách kết hợp emoji với nội dung hiện tại
      setCaption((prevCaption) => prevCaption + emojiString);
   };

   const toggleEmojiPicker = () => {
      setShowEmojiPicker(!showEmojiPicker);
   };

   return (
      <Modal open={open} onClose={handleClose}>
         <Box sx={{ width: 'auto', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '8px' }}>
            <div className="flex-row">
               <img src={selectedImage} alt="Selected Avatar" style={{ width: '50%', height: '50%', maxWidth: '50%', maxHeight: '50%' }} className="rounded-xl" />
               <div className="flex-col">
                  <textarea
                     className='outline-none w-full mt-5 p-2 bg-transparent border border-[#3b4054] rounded-2xl text-white w-full'
                     placeholder='Write caption...'
                     value={caption}
                     onChange={(e) => setCaption(e.target.value)}
                     cols="4"
                     rows="6"
                  />
                  <IconButton onClick={toggleEmojiPicker}>
                     <InsertEmoticonIcon className='text-yellow-400' />
                  </IconButton>
                  <div className="emoji-container">
                     <div className='emoji-picker'>
                        {showEmojiPicker && (
                           <div className="absolute right-[100%] bottom-[20%]">
                              <EmojiPicker onEmojiClick={handleEmojiClick} />
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex w-full justify-end'>
               <Button onClick={() => handleAvatarConfirmation(caption)} variant="contained" color="primary" >Confirm Avatar</Button>
            </div>
         </Box>
      </Modal>
   );
};

export default AvatarModal;