import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    Edit,
    Filter,
    required,
    email,
} from 'react-admin';

const validateEmail = [required(), email()];
const validateRequired = required();

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput source="firstName" validate={validateRequired} />
            <TextInput source="lastName" validate={validateRequired} />
            <TextInput source="email" validate={validateEmail} />
        </SimpleForm>
    </Create>
);

const UserEditTitle = ({ record }) => (<span>{`${record.firstName} ${record.lastName}`}</span>);

export const UserEdit = props => (
    <Edit {...props} title={<UserEditTitle />}>
        <SimpleForm redirect="list">
            <TextInput source="firstName" validate={validateRequired} />
            <TextInput source="lastName" validate={validateRequired} />
            <TextInput source="email" />
            <BooleanInput source="isPresent" />
        </SimpleForm>
    </Edit>
);