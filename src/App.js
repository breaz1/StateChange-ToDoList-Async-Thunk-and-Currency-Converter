import React from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'
import ConvertMoney from './components/ConvertMoney'
import { useSelector } from 'react-redux'

function App() {
    const todos = useSelector((state)=> state.todo.todos)
    return (
        <div className='min-h-screen h-full w-screen bg-indigo-300'>
            <div className='container mx-auto px-4'>
                <header className='flex gap-20 '>
                    <div className='w-1/4'>
                        <h1 className='font-bold my-5'>Redux Toolkit State Change</h1>
                        <User />
                    </div>
                    <div className='w-1/4'>
                        <h1 className='font-bold my-5'>Redux Toolkit Todo App</h1>
                        <Form />
                        {todos?.map((todo)=>(
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                />
                            ))
                        }
                    </div>
                    <div className='w-1/4'>
                        <h1 className='font-bold my-5'>Redux Toolkit Async Thunk</h1>
                        <Posts />
                    </div>
                    <div className='w-1/4'>
                        <h1 className='font-bold my-5'>Currency Converter</h1>
                        <ConvertMoney />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default App
