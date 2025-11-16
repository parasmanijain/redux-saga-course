import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewUserForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName });

    // Reset form fields
    setFirstName("");
    setLastName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First name</Label>
        <Input
          required
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          required
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUserForm;