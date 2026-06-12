import clsx from 'clsx';

type TeamMember = {
  name: string;
  title: string;
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

function TeamAvatar({ name, colorIndex }: { name: string; colorIndex: number }) {
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
          <TeamAvatar name={member.name} colorIndex={index} />
          <h3 className="mt-4 text-lg font-semibold text-revoducate-sage">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-revoducate-charcoal">{member.title}</p>
        </article>
      ))}
    </div>
  );
}
