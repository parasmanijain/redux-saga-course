import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { NewUserForm } from "./NewUserForm";
import { UserList } from "./UserList";
import {
  createUserRequest,
  deleteUserRequest,
  getUsersRequest,
  usersError,
} from "../actions/users";

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector<any, any>((state) => state.users);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  const handleCreateUserSubmit = ({
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName: string;
  }) => {
    dispatch(createUserRequest({ firstName, lastName }));
  };

  const handleDeleteUserClick = (userId: any) => {
    dispatch(deleteUserRequest(userId));
  };

  const handleCloseAlert = () => {
    dispatch(usersError({ error: "" }));
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <h2>Users</h2>
      <Alert color="danger" isOpen={!!users.error} toggle={handleCloseAlert}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={handleCreateUserSubmit} />
      {!!users.items && !!users.items.length && (
        <UserList
          onDeleteUserClick={handleDeleteUserClick}
          users={users.items.map((u: any) => ({ ...u }))}
        />
      )}
    </div>
  );
};
