import { ReactNode } from "react";
import { Datagrid, Edit, EditButton, EmailField, List, NumberField, ReferenceField, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const CustomCommentList = (): ReactNode => (
  <List>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <ReferenceField reference="posts" source="postId" />
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const CustomCommentEdit = (): ReactNode => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="Post Id" source="postId" disabled />
        <TextInput label="Comment Id" source="id" disabled />
        <TextInput label="Name" source="name" required />
        <TextInput label="Email" source="email" disabled />
      </SimpleForm>
    </Edit>
  );
};

export const CustomCommentShow = (): ReactNode => {
  return (
    <Show>
      <SimpleShowLayout>
        <ReferenceField reference="posts" source="postId" link="show">
          <TextField source="title" />
        </ReferenceField>
        <NumberField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
      </SimpleShowLayout>
    </Show>
  );
};
