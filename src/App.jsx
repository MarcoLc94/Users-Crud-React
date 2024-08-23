import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'


function App() {
  const [getUser, users, createUser, deleteUser, updateUser] = useFetch("/users/")
  const [userSelected, setUserSelected] = useState()
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    getUser()
  
  }, [getUser])
  
  console.log(users)

  return (
    <div className='app-container'>
      <h1>Users Crud</h1>
      <UserForm createUser={createUser} userSelected={userSelected} setUserSelected={setUserSelected} updateUser={updateUser} isEdit={isEdit} setIsEdit={setIsEdit}/>
      <div className='cards-container'>
        {
          users?.map((user) =>  (
             <UserCard key={user.id} user={user} deleteUser={deleteUser} setUserSelected={setUserSelected} setIsEdit={setIsEdit}/>
          )
          )
        }
      </div>
    </div>
  )
}

export default App
