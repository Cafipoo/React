import React from 'react';
import SocialIcon from '../../ui/SocialIcon/SocialIcon';

interface SocialMediaProps {
    socials: {
        name: string;
        url: string;
    }[];
    className?: string;
}

export default function SocialMedia({ socials, className }: SocialMediaProps) {
    if (!socials || socials.length === 0) {
        return null;
    }

    socials.sort((a, b) => a.name.localeCompare(b.name));

    const liste = socials.map((s, index) => (
        <li key={index}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
                <SocialIcon name={s.name} />
            </a>
        </li>
    ));

    return <ul className={`flex space-x-2 ${className}`}>{liste}</ul>;
}