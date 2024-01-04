import Image from "next/image";

function Skill({ name, src, width, height }) {
  return (
    <div className="flex flex-col h-[104px] gap-1 w-24 items-center justify-between">
      <div className="relative w-20 h-20 aspect-square">
        <Image
          fill
          src={src}
          alt={name}
          className="object-contain"
          sizes="(max-width: 768px) 50px, (min-width: 768px) 300px"
        />
      </div>
      <span className="text-[18px] italic orange">{name}</span>
    </div>
  );
}

export default Skill;
