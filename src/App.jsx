import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'


function App() {
  const [getUser, users, createUser, deleteUser, updateUser] = useFetch("/users/")
  const [userSelected, setUserSelected] = useState()
  const [isEdit, setIsEdit] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleVisible = () => {
    setIsVisible(true)
    setIsEdit(false)
    setUserSelected(false)
  }

  useEffect(() => {
    getUser()
  
  }, [getUser])
  
  console.log(users)

  return (
    <div className='app-container'>
      <div className='userback'>
      <h1>Users Crud</h1>
      <button className='newuser' onClick={handleVisible}>New user +</button>
      </div>
      <UserForm createUser={createUser} userSelected={userSelected} setUserSelected={setUserSelected} updateUser={updateUser} isEdit={isEdit} setIsEdit={setIsEdit} isVisible={isVisible} setIsVisible={setIsVisible}/>
      <div className='cards-container'>
        {
          users?.map((user) =>  (
             <UserCard key={user.id} user={user} deleteUser={deleteUser} setUserSelected={setUserSelected} setIsEdit={setIsEdit} setIsVisible={setIsVisible}/>
          )
          )
        }
      </div>
    </div>
  )
}

export default App
