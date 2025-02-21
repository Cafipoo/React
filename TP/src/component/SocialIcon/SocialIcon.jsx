export default function SocialIcon({name}) {
    const icons = {
        'Instagram': './src/assets/instagram.png',
        'Github': './src/assets/github.png',
        'Meta': './src/assets/meta.webp',
    }

    return (
        <img src={icons[name]} alt={name} className="h-10" />
    )
}