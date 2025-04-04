import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContextApi.jsx'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit2 } from "lucide-react";
import TodoModal from '../components/TodoModal.jsx';
import { toast } from 'sonner';
import { dateParser } from '@biswarup598/date-parser';

const UserPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTasks()
  }, []);

  async function fetchTasks() {
    const res = await axios.get("http://localhost:5000/api/v1/todos", {withCredentials: true})
    console.log(res.data);
    setTodos(res.data.todo)
  }

  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/v1/todos/${id}`, { withCredentials: true });
      toast.success(res.data.message);
      fetchTasks();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    user && <div className='bg-gray-900'>
      <Navbar name="Log out" path="/user" logout={true} />
      <h1 className='text-3xl text-center pt-8 font-extrabold text-neutral-300'>Welcome {user.name}!!</h1>
      <p className='text-neutral-200 text-xl text-center'>What's on your mind today?</p>
      <div className="min-h-screen flex flex-col items-center p-6 bg-slate-900">
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-6 px-10">
            <TodoModal edit={false} todo={{}} fetchTasks={fetchTasks} />
          </div>
        </div>
        <div className="grid gap-4 mt-10 w-full max-w-lg">
          {todos.map(todo => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                <div>
                  <h1 className='text-xl text-black'>{todo.title}</h1>
                  <p className="text-gray-600">{todo.description}</p>
                  <span className={`text-sm font-semibold ${todo.status === 'completed' ? 'text-green-500' : todo.status === 'deleted' ? 'text-red-500' : 'text-yellow-500'}`}>{todo.status}</span>
                  <p className='text-gray-400'><span>Created at: {dateParser(todo.createdAt)[1]} of {dateParser(todo.createdAt)[0]}</span></p>
                </div>
                <div className="flex gap-2">
                  <div
                    className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2">
                    <TodoModal todo={todo} edit={true} fetchTasks={fetchTasks} />
                  </div>
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div >
)}

export default UserPage;