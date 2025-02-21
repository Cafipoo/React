interface EmailProps {
    children: string;
    className: string;
}

function checkEmail (email: string) : boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default function Email(props: EmailProps) {
    if (props.children === undefined || props.children === "") {
        return null;
    }
    if (checkEmail(props.children) == false) {
        console.error("Email invalide");
        return null;
    }
    return (
        <span className={`text-sm ${props.className}`}>
            {props.children}</span>
    )
}