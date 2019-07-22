import React from 'react';
import { Admin, Resource, ShowGuesser, ListGuesser } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import { UserCreate, UserEdit } from './Users';

const dataProvider = crudProvider('http://localhost:3001');
const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} create={UserCreate} edit={UserEdit} show={ShowGuesser} />
    </Admin>
);
export default App;