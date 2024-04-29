import { List, Datagrid, TextField, ReferenceField, ShowButton, EditButton, Show, SimpleShowLayout, Edit, SimpleForm, TextInput, Create } from "react-admin";
import { ReactNode } from "react";

export const CustomPostList = ():ReactNode => (
    <List>
        <Datagrid bulkActionButtons={false} rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField  label="Username"source="userId" reference="users" link="show">
                <TextField source="username"/>
            </ReferenceField>
            <ShowButton/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const CustomPostShow = ():ReactNode => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField label="Username" source="userId" reference="users">
                <TextField source="username" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export const CustomPostEdit = ():ReactNode => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="username" />
        </SimpleForm>
    </Edit>
);

export const CustomPostCreate=():ReactNode=>(
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="username" />
        </SimpleForm>
    </Create>
);
