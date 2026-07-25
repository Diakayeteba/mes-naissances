type Props= {
    firstName : string;
    lastName : string;
};
function Message(props:Props){
    return (
        <p>
            Bonjour {props.firstName} {props.lastName}
        </p>  
    );
}

export default Message;