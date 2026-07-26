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
                <article className="user">
                    <h3 className="#">
                        <p>{user.firstName} {user.lastName}</p>
                    </h3>
                    <p className="#">{user.email}</p>
                    <p className="#">{user.phone}</p>
                </article>
            ))}
        </section>
    );
};



export default Users;
