import {Datagrid,List, TextField} from 'react-admin'

export const UserList = (props) => ( 
    <List{...props}>
    <Datagrid rowClik="edit">
        <TextField source="id"/>
            <TextField source="name" />
            <TextField source="username" />
    </Datagrid>
    
    </List>
)