import { ListGroup, ListGroupItem } from "reactstrap";
import { UserListItem } from "./UserListItem";

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
            a: { firstName: string; lastName: string },
            b: { firstName: string; lastName: string }
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
