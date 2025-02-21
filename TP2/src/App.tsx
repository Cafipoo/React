import './App.css'
import 'tailwindcss'
import Card from './component/Card/Card'
import Team from './component/Team/Team';
import TeamGallery from './component/TeamGallery/TeamGallery';


const cardsData = [
  {
          picture: './src/assets/pp.jpg',
          name: 'Gary DO',
          email: 'gary.do@but1.mmi',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
          socials: [{
                  name: 'Instagram', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png',
          }]
  },
  {
          picture: './src/assets/pp.jpg',
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
          picture: './src/assets/pp.jpg',
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
          picture: './src/assets/pp.jpg',
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
          picture: './src/assets/pp.jpg',
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
          picture: './src/assets/pp.jpg',
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
          picture: './src/assets/pp.jpg',
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
          picture: './src/assets/pp.jpg',
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
function App() {
  return (
    <div>
      <TeamGallery title='Team' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.' members={cardsData}/>
    </div>
  )
}

export default App
