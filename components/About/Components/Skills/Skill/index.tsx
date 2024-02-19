import Image from "next/image";

function Skill({ name, src }: { name: string; src: any }) {
  return (
    <div className="flex flex-col w-[90px] max-sm:w-16 gap-2 items-center justify-between mb-5 duration-300 hover:scale-[1.18]">
      <div className="relative overflow-hidden w-full h-16 max-sm:w-16 max-sm:h-12 aspect-square">
        <Image
          fill
          src={src}
          alt={name}
          className="object-contain rounded-2xl"
          sizes="(max-width: 768px) 70px, (min-width: 768px) 100px"
        />
      </div>
    </div>
  );
}

export default Skill;
