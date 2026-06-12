import clsx from 'clsx';
import Image, { type StaticImageData } from 'next/image';

export type TeamMember = {
  name: string;
  title: string;
  credential?: string;
  image?: string | StaticImageData;
  link?: string;
};

type TeamGridProps = {
  members: TeamMember[];
};

const avatarColors = [
  'bg-revoducate-coral',
  'bg-revoducate-sage',
  'bg-[#8BA89A]',
  'bg-[#E89585]',
  'bg-[#5A7A6E]',
  'bg-[#FFB4A8]',
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function TeamAvatar({
  name,
  image,
  colorIndex,
}: {
  name: string;
  image?: string | StaticImageData;
  colorIndex: number;
}) {
  if (image) {
    return (
      <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-revoducate-sage/20">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'flex h-20 w-20 items-center justify-center rounded-full text-xl font-semibold text-white',
        avatarColors[colorIndex % avatarColors.length],
      )}
      aria-hidden
    >
      {getInitials(name)}
    </div>
  );
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, index) => (
        <article
          key={member.name}
          className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
        >
          {member.link ? (
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="transition-opacity hover:opacity-80"
            >
              <TeamAvatar name={member.name} image={member.image} colorIndex={index} />
            </a>
          ) : (
            <TeamAvatar name={member.name} image={member.image} colorIndex={index} />
          )}
          <h3 className="mt-4 text-lg font-semibold text-revoducate-sage">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-revoducate-charcoal">{member.title}</p>
          {member.credential && (
            <p className="mt-1 text-xs text-revoducate-sage">{member.credential}</p>
          )}
        </article>
      ))}
    </div>
  );
}
