import { stackoverflow } from "@/assets";
import { styles } from "./styles";

import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={`relative w-full h-[800px] max-sm:h[500px] mx-auto`}>
      <div
        className={`absolute max-sm:relative max-sm:top-0 max-sm:pt-40 max-sm:mb-10 z-10 inset-0 top-40 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5 max-xsm:hidden'>
          <div className='w-5 h-5 rounded-full bg-[#D4AF37]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#D4AF37]'>Arsen Abrahamyan</span>
          </h1>
          <div>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop web applications and user interfaces
            </p>

          </div>
        </div>
      </div>
      <div className="animate-opacity absolute top-[400px] max-sm:relative max-sm:top-0  w-full flex justify-center">
        <Image
          src={stackoverflow}
          alt="pic" width={400}
          height={400}
          className="w-96 max-sm:w-80 max-xsm:w-4/5 saturate-[0.8]"
          // sizes="(max-width: 640px) 350px, (min-width: 640px) 700px"
        />
      </div>


      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
