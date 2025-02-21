import SocialIcon from "../SocialIcon/SocialIcon";
export default function Social({socials}) {
    let liste = socials.map(s => {
        return (
            <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                    <SocialIcon name={s.name}/>
                </a>
            </li>
        );
    });

    return (
        <ul className="flex items-center item-center space-x-4 object-cover py-4">
            {liste}
        </ul>
    )
}