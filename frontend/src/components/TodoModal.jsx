import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Edit2, Plus } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3
};

function TodoModal({edit, todo, fetchTasks}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = React.useState(todo.title || "");
    const [description, setDescription] = React.useState(todo.description || "");
    const [status, setStatus] = React.useState(todo.status || "");

    async function handleSubmit(){
        try {
            if (edit) {
                const res = await axios.put(`http://localhost:5000/api/v1/todos/${todo._id}`, {
                title: title,
                description: description,
                status: status
                }, { withCredentials: true });
                fetchTasks();
                toast.success(res.data.message);
            }
            else {
                const res = await axios.post(`http://localhost:5000/api/v1/todos/`, {
                    title: title,
                    description: description,
                    status: status
                }, { withCredentials: true });
                fetchTasks();
                toast.success(res.data.message);
            }
            handleClose();
        } catch (error) {
            console.log(error)
            toast.error(error.response.data?.message);
        }
    }

    return (
        <div>
            <Button onClick={handleOpen}> {edit ? <Edit2 size={20} className='text-yellow-200' /> : <><Plus size={18} className='text-white' /><span className='text-white'>Add</span></> }</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='flex gap-2'>
                        <label htmlFor="title" className='text-slate-500'>Title:</label>
                        <input name='title' type="text" value={title} onChange={e=>setTitle(e.target.value)} className='outline-none' />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='flex gap-2'>
                        <label htmlFor="description" className='text-slate-500'>Description: </label>
                        <textarea name='description' type="text" value={description} onChange={e => setDescription(e.target.value)} className='outline-none' />
                    </Typography>
                    <Typography id="modal-modal-status" variant="h6" component="h3" className='flex-col gap-2'>
                        <label htmlFor="status" className='text-slate-500'>Status: </label>
                        <div className='inline-block'>
                            <input name='status' type="radio" value="pending" onChange={e => setStatus(e.target.value)} className='outline-none mx-2' />Pending
                            <input name='status' type="radio" value="completed" onChange={e => setStatus(e.target.value)} className='outline-none mx-2' />Completed
                        </div>
                        {edit?<Button onClick={handleSubmit}>Update</Button>:<Button onClick={handleSubmit}>Add</Button>}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default TodoModal;