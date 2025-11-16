import { ListGroup, ListGroupItem } from "reactstrap";
import { UserListItem } from "./UserListItem";
import { CreateUserPayload } from "../models";

export const UserList = ({
  users,
  onDeleteUserClick,
}: {
  users: any;
  onDeleteUserClick: any;
}) => {
  return (
    <ListGroup>
      {users
        .sort(
          (
            a: CreateUserPayload,
            b: CreateUserPayload
          ) => {
            if (a.firstName > b.firstName) {
              return 1;
            } else if (a.firstName < b.firstName) {
              return -1;
            } else if (a.lastName > b.lastName) {
              return 1;
            } else if (a.lastName < b.lastName) {
              return -1;
            }
            return 0;
          }
        )
        .map((user: any) => {
          return (
            <ListGroupItem key={user.id}>
              <UserListItem onDeleteClick={onDeleteUserClick} user={user} />
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};
