type User = {
     index : string,
    gender : string,
    picture : string,
    firstName : string,
 	lastName : string,
    email : string,
    phone : number,
    address : string,
    about : string,
    };

type Props = {
    users : User[];
};

function Users(props : Props) {
    
    const users = props.users;
   
    return (
        <section className="grid">
            {users.map((user : User) =>(
                <article className=" rounded-lg user border border-gray-100 md:grid grid-cols-3 gap-4 ">
                    <h3 className="text-lg  border border-gray-500">
                        <p>{user.firstName} {user.lastName}</p>
                    </h3>
                    <p className="text-base ">{user.email}</p>
                    <p className="text-base ">{user.phone}</p>
                </article>
            ))}
        </section>
    );
};



export default Users;
