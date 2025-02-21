import Card from "../Card/Card";
import React from "react";

interface MemberProps {
    picture: string;
    name: string;
    email: string;
    description: string;
    socials: {
        name: string;
        url: string;
    }[];
}
interface TeamProps {
    title:string;
    description:string;
    members: MemberProps[];
}

export default function Team( team : TeamProps) {
    return (
        <div>
            <h1 className="text-2xl text-black font-bold pt-4 text-center">{team.title}</h1>
            <p className="text-xl text-black font-bold pt-4 text-center italic">{team.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.members.map((member, index) => (
                    <li className="team-member" key={index}>
                        <Card {...member} />
                    </li>
                ))}
            </div>
        </div>
    );
}