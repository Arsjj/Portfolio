import Image from "next/image";

function Skill({ name, src, width, height }) {
  return (
    <div className="flex flex-col h-[104px] items-center justify-between w-24">
        <Image height={height} width={width} src={src} alt={name} className=""/>
      <span className="text-[18px] italic orange">{name}</span>
    </div>
  );
}

export default Skill;
