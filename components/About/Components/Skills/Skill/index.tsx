import Image from "next/image";

function Skill({ name, src }: { name: string; src: any }) {
  return (
    <div className="flex flex-col w-[90px]  max-sm:w-20 gap-2 items-center justify-between mb-4">
      <div className="relative overflow-hidden w-20 h-16 max-sm:w-20 max-sm:h-16 aspect-square">
        <Image
          fill
          src={src}
          alt={name}
          className="object-contain"
          sizes="(max-width: 768px) 70px, (min-width: 768px) 100px"
        />
      </div>
      <span className="text-[18px] italic md:hidden">{name}</span>
    </div>
  );
}

export default Skill;
