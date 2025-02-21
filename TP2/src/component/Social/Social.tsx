import SocialIcon from "../../ui/SocialIcon/SocialIcon";

interface SocialProps {
  socials: {
    name: string;
    url: string;
  }[];
}

export default function Social({ socials }: SocialProps) {
  const liste = socials.map((s) => (
    <li key={s.name}>
      <a href={s.url} target="_blank" rel="noopener noreferrer">
        <SocialIcon name={s.name} />
      </a>
    </li>
  ));

  return <ul className="flex items-center space-x-4 py-4">{liste}</ul>;
}