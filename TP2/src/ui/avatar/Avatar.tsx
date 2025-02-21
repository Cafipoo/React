interface AvatarProps {
  src: string;
  alt:string;
  className?: string;
}
export default function Avatar( props: AvatarProps) {
    return (
        <img src={props.src} alt={props.alt} className={`sepia ${props.className}`} />
    );
}