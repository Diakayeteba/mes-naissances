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

 //Destructure les props
    //const users = props.users;
    //const {users} = props;
function Users({users} : Props) {
   
    return (
        <section className="grid">
            {users.map(({firstName, lastName, phone, email = "Indisponible"} : User) =>(
                <article className=" rounded-lg user border border-gray-100 md:grid grid-cols-3 gap-4 ">
                    <h3 className="text-lg  border border-gray-500">
                        <p>{firstName} {lastName}</p>
                    </h3>
                    <p className="text-base ">{email}</p>
                    <p className="text-base ">{phone}</p>
                </article>
            ))}
        </section>
    );
};



export default Users;
