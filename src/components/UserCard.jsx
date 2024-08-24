import "./UserCard.css"
import Swal from 'sweetalert2/src/sweetalert2.js'

const UserCard = ({user, deleteUser, setUserSelected, setIsEdit, setIsVisible}) => {

    const handleDelete = () => {
      deleteUser(user.id)
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${user.first_name} deleted succesfully!`,
        showConfirmButton: false,
        timer: 5000
      });
    }

    const handleEdit = () => {
      setIsEdit(true)
      setIsVisible(true)
      setUserSelected(user)
    }

  return (
    <div className="card-container">
      <img src={user?.image_url} alt={`${user?.first_name}`} />
      <h3>👤{user?.first_name} {user?.last_name}</h3>
      <hr />
      <ul>
        <li><span>📧Email: </span><span>{user?.email}</span></li>
        <li><span>🎂Birthday: </span><span>{user?.birthday}</span></li>
      </ul>
      <div className="button-card">
      <button onClick={handleDelete} className="button-delete">Delete</button>
      <button onClick={handleEdit} className="button-edit">🖊</button>
      </div>
    </div>
  )
}

export default UserCard
