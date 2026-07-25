type Props= {
    firstName : string;
    lastName : string;
    email?: string;
    adress?: string;
    phone?: number;
};
function Message(props:Props){
    return (
        <p>
            Bonjour {props.firstName} {props.lastName}
            {props?.email && ( <span>{props.email}</span>)}
            {props?.adress && ( <span>{props.adress}</span>)}
            {props?.phone ? ( <span>{props.phone}</span>):null}
        </p>  
    );
}

export default Message;