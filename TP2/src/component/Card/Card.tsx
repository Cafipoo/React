// filepath: /c:/Users/fplaj/Desktop/React/TP/src/component/Card/Card.tsx
import './../../App.css';
import 'tailwindcss';
import SocialMedia from '../SocialMedia/SocialMedia';
import Email from '../../ui/Email/Email';
import Citation from '../../ui/Citation/Citation';
import Avatar from '../../ui/avatar/Avatar';
import React from 'react';

interface CardProps {
    picture: string;
    name: string;
    email: string;
    description: string;
    socials?: {name:string, url:string}[];
    className?: string;
}
 
export default function Card(somebody: CardProps) {
    // <div key={c.name} className="w-sm bg-white shadow-lg rounded-xl p-8 m-4">
    //   <div className="flex items-center justify-center bg-gray-50 w-xs rounded-xl relative">
    //     <a href="" target="_blank" className="">
    //       <img src={c.img} alt="Vite logo" className="object-cover w-sm aspect-square rounded-xl" />
    //       <div className="absolute bottom-2 right-2 bg-orange-500 w-9 h-9 rounded-full border-6 border-white"></div>
    //     </a>
    //   </div>
    //   <h1 className="text-2xl text-black font-bold pt-4">{c.name}</h1>
    //   <p className="text-xl text-emerald-400 font-semibold">{c.email}</p>
    //   <p className="text-lg text-gray-500">{c.description}</p>
    //   <Social socials={c.socials} />
    // </div>
    return (
        <article className='card'>
            <Avatar src={somebody.picture} alt={somebody.name} className='object-cover w-sm aspect-square rounded-xl'></Avatar>
            <h2 className='text-2xl text-black font-bold pt-4'>{somebody.name}</h2>
            <Email  className='text-xl text-emerald-400 font-semibold py-3'>{somebody.email}</Email>
            <Citation className='text-xl text-gray-500 font-thin w-92 italic text-center'>{somebody.description}</Citation>
            <SocialMedia socials={somebody.socials} className='card__socialmedia'></SocialMedia>
        </article>
    );
}

