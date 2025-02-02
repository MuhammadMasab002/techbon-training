import { useEffect, useState } from "react";



function Users() {

    const [users, setUsers] = useState([]);
    const [pending, setPending] = useState(false);

    const fetchAllUsers = async () => {
        try {
            setPending(true);
            const apiResponse = await fetch('https://dummyjson.com/users', {
                method: 'GET',
            })

            const result = await apiResponse.json();

            if (result?.users) {
                setUsers(result?.users);
                setPending(false);
            }
            else {
                setUsers([])
                setPending(false);
            }

            // console.log(result);
            
        } catch (error) {
            console.log('error fetching users', error);
            
        }
    }

    useEffect(() => {
        fetchAllUsers()
    }, [])
    
    console.log(users);

    if(pending) return console.log('fetching users! please wait');
    
    

    return (
        <div>
            <h1 className="mt-6">List of Users</h1>
            {/* Add User List */}

        </div>
    )
}

export default Users;