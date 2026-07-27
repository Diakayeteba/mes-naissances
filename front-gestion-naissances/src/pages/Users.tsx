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
    let usersSorted: User[] =users;
    const sortBy = (field: string) => {
        console.log(field)
        usersSorted = usersSorted.sort((firstUser: User, secondUser: User) => {
            const fieldInFirstUser = firstUser[field as keyof User] || "";
            const fieldInSecondUser = secondUser[field as keyof User] || "";

            if (fieldInFirstUser > fieldInSecondUser){
                return 1;
            }
            if (fieldInFirstUser < fieldInSecondUser){
                return -1;
            }

            return 0

        });

        }
    
    return (
        <section >
            <div className="flex justify-end items-center text-my-2 gap-2">
                <span>Trier par</span>
                <button type="button"
                 className="border border-gray-50 rounded-md py-2 px-1 text-xs"
                    onClick={()=> sortBy("male")}
                >
                    Hommes
                    
                </button>
                <button type="button"
                 className="border border-gray-50 rounded-md py-2 px-1 text-xs"
                     onClick={()=> sortBy("female")}
                 >
                    Femmes
                </button>
                

            </div>

            <div className=" ">
            {usersSorted.map(({gender, firstName, lastName, phone, email = "Indisponible"} : User) =>(
                <article className=" rounded-lg user border border-gray-100 md:grid grid-cols-3 gap-4 ">
                    <h3 className="text-lg  border border-gray-500">
                        <p>{gender} {firstName} {lastName}</p>
                    </h3>
                    <p className="text-base ">{email}</p>
                    <p className="text-base ">{phone}</p>
                </article>
            ))}
            </div>
        </section>
    );
};



export default Users;
