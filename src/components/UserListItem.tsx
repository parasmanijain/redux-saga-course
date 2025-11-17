import { Button } from "reactstrap";
import classes from "./UserListItem.module.scss";

export const UserListItem = ({
  user,
  onDeleteClick,
}: {
  user: any;
  onDeleteClick: any;
}) => {
  const stringToHslColor = (str = "") => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return `hsl(${h},60%,80%)`;
  };

  return (
    <div className={classes.listItemContainer}>
      <div
        className={classes.listItem}
        style={{
          background: stringToHslColor(user.firstName + user.lastName),
        }}
      >
        {!!user && !!user.firstName && !!user.lastName
          ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
          : ""}
      </div>
      <div className={classes.labelContainer}>
        {user.firstName} {user.lastName}
      </div>
      <div className={classes.buttonContainer}>
        <Button
          size="sm"
          color="danger"
          outline
          onClick={() => onDeleteClick(user.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
