import Image from 'next/image';

export function TelescopeIcon() {
  return (
    <Image
      src="/telescope.svg"
      alt="Discovery"
      width={160}
      height={160}
      className="w-full h-full"
    />
  );
}

export function LightbulbIcon() {
  return (
    <Image
      src="/bulb.svg"
      alt="Analysis"
      width={160}
      height={160}
      className="w-full h-full"
    />
  );
}

export function WrenchIcon() {
  return (
    <Image
      src="/tool.svg"
      alt="Execution"
      width={160}
      height={160}
      className="w-full h-full"
    />
  );
}
