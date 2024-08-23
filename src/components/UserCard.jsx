import "./UserCard.css"

const UserCard = ({user, deleteUser, setUserSelected, setIsEdit}) => {

    const handleDelete = () => {
      deleteUser(user.id)
      alert("User deleted Succesfully")
    }

    const handleEdit = () => {
      setIsEdit(true)
      setUserSelected(user)
    }

  return (
    <div className="card-container">
      <img src={user.image_url} alt={`${user.first_name}`} />
      <h3>👤{user.first_name} {user.last_name}</h3>
      <hr />
      <ul>
        <li><span>📧Email: </span><span>{user.email}</span></li>
        <li><span>🎂Birthday: </span><span>{user.birthday}</span></li>
      </ul>
      <div className="button-card">
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>🖊</button>
      </div>
    </div>
  )
}

export default UserCard
