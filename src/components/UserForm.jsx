import { useEffect } from "react";
import "./UserForm.css";
import { useForm } from "react-hook-form";

const UserForm = ({
  createUser,
  userSelected,
  setUserSelected,
  updateUser,
  isEdit,
  setIsEdit,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(userSelected);
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      updateUser(userSelected.id, data);
      setUserSelected(null);
      reset({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: "",
        image_url: "",
      });
      setIsEdit(false);
      alert("User updated succesfully");
    } else {
      createUser(data);
      reset({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: "",
        image_url: "",
      });
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(submit)}>
        <label className="label-container">
          <span>Email: </span>
          <input
            type="email"
            {...register("email", {
              maxLength: {
                value: 30,
                message: "⚠ The maximum limit of characters is 30",
              },
              required: "This field is mandatory",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "⚠ Please enter a valid email address",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </label>

        <label className="label-container">
          <span>Password: </span>
          <input
            type="password"
            {...register("password", {
              maxLength: {
                value: 15,
                message: "⚠ The maximun limit of character is 15",
              },
              required: "This field is mandatory",
            })}
          />
          <p>{errors.password?.message}</p>
        </label>
        <label className="label-container">
          <span>First Name: </span>
          <input type="text" {...register("first_name")} required />
        </label>
        <label className="label-container">
          <span>Last Name: </span>
          <input type="text" {...register("last_name")} required />
        </label>
        <label className="label-container">
          <span>Birthday: </span>
          <input type="date" {...register("birthday")} required />
        </label>
        <label className="label-container">
          <span>Image Url: </span>
          <input type="text" {...register("image_url")} required />
        </label>
        <div className="button-container">
          <button>{isEdit ? <span>Update</span> : <span>Submit</span>}</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
