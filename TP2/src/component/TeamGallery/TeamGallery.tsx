import { useState } from 'react';
import Card from '../Card/Card';

interface MemberProps {
    image: string;
    name: string;
    email?: string;
    phrase?: string;
    socials?: {name: string, url: string}[];
    className?: string;
}

interface TeamProps {
    title: string;
    description: string;
    members: MemberProps[];
}

export default function TeamGallery(Team: TeamProps) {
    const [index, setIndex] = useState(0);
    const hasnext = index < Team.members.length - 1;
    const hasprev = index > 0;

    function handleNextClick() {
        if (hasnext) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

    function handlePrevClick() {
        if (hasprev) {
            setIndex(index - 1);
        }
        else {
            setIndex(Team.members.length - 1);
        }
    }

    let member = Team.members[index];
    return (
        <>
        <div className="flex flex-row justify-center items-center">
            <button onClick={handlePrevClick}>Prev</button>

            <div>
                <Card {...member} />
            </div>

            <button onClick={handleNextClick}>Next</button>
        </div>
        </>
    );
}