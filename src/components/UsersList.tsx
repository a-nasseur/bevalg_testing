import { List, ListItem, Typography } from "@mui/material";

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {});
  
    if(!response.ok) throw Error('khraaaaa');
  
    const users = await response.json();
  
    return users;
  
  }


export default async function UsersList () {
    const users = await getUsers();
    return (
        <>
        <List>
            {
                users &&
                users.map((user: any) => (
                    <ListItem key={user.id}>
                        <Typography variant="h5">{user.name}</Typography>
                        <Typography variant="body1">{user.email}</Typography>
                    </ListItem>
                ))
            }
        </List>
        </>
    )
}