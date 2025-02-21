import './../../App.css'
import 'tailwindcss'
import './../Social/Social'
import Social from './../Social/Social'

function Card() {
    let cardsData = [{
        img: './src/assets/pp.jpg',
        name: 'Gary DO',
        email: 'gary.do@but1.mmi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        socials: [{
            name: 'Instagram', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png',
        }]
    },
    {
        img: './src/assets/pp.jpg',
        name: 'Gary DO2',
        email: 'gary.do@but2.mmi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        socials: [{
            name: 'Instagram', url: 'https://upload.wikimedia.org',
        },
        {
            name: 'Github', url: 'https://github.com'
        },
        {
            name: 'Meta', url: 'https://cdn.pixabay.com/'
        }   
        ]
    },
    {
        img: './src/assets/pp.jpg',
        name: 'Gary DO3',
        email: 'gary.do@but2.mmi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        socials: [{
            name: 'Instagram', url: 'https://upload.wikimedia.org',
        },
        {
            name: 'Github', url: 'https://github.com'
        },
        {
            name: 'Meta', url: 'https://cdn.pixabay.com/'
        }   
        ]
    },
    {
        img: './src/assets/pp.jpg',
        name: 'Gary DO4',
        email: 'gary.do@but2.mmi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        socials: [{
            name: 'Instagram', url: 'https://upload.wikimedia.org',
        },
        {
            name: 'Github', url: 'https://github.com'
        },
        {
            name: 'Meta', url: 'https://cdn.pixabay.com/'
        }   
        ]
    },
    {
        img: './src/assets/pp.jpg',
        name: 'Gary DO5',
        email: 'gary.do@but2.mmi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        socials: [{
            name: 'Instagram', url: 'https://upload.wikimedia.org',
        },
        {
            name: 'Github', url: 'https://github.com'
        },
        {
            name: 'Meta', url: 'https://cdn.pixabay.com/'
        }   
        ]
    },
    {
        img: './src/assets/pp.jpg',
        name: 'Gary DO6',
        email: 'gary.do@but2.mmi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        socials: [{
            name: 'Instagram', url: 'https://upload.wikimedia.org',
        },
        {
            name: 'Github', url: 'https://github.com'
        },
        {
            name: 'Meta', url: 'https://cdn.pixabay.com/'
        }   
        ]
    },
    {
        img: './src/assets/pp.jpg',
        name: 'Gary DO7',
        email: 'gary.do@but2.mmi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        socials: [{
            name: 'Instagram', url: 'https://upload.wikimedia.org',
        },
        {
            name: 'Github', url: 'https://github.com'
        },
        {
            name: 'Meta', url: 'https://cdn.pixabay.com/'
        }   
        ]
    },
    {
        img: './src/assets/pp.jpg',
        name: 'Gary DO8',
        email: 'gary.do@but2.mmi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
        socials: [{
            name: 'Instagram', url: 'https://upload.wikimedia.org',
        },
        {
            name: 'Github', url: 'https://github.com'
        },
        {
            name: 'Meta', url: 'https://cdn.pixabay.com/'
        }   
        ]
    },
];

    let cards = cardsData.map(c  => (
        <div key={c.name} className="w-sm bg-white shadow-lg rounded-xl p-8 m-4">
            <div className="flex items-center justify-center bg-gray-50 w-xs rounded-xl relative">
                <a href="" target="_blank" className="">
                <img src={c.img} alt="Vite logo" className="object-cover w-sm aspect-square rounded-xl" />
                <div className="absolute bottom-2 right-2 bg-orange-500 w-9 h-9 rounded-full border-6 border-white"></div>
                </a>
            </div>
            <h1 className="text-2xl text-black font-bold pt-4">{c.name}</h1>
                <p className="text-xl text-emerald-400 font-semibold">
                {c.email}
                </p> 
            <p className="text-lg text-gray-500">
                {c.description}
            </p>
            <Social socials={c.socials}/>
        </div>
    ));

  return (
    <>
        {cards}  
    </>
  )
}

export default Card
