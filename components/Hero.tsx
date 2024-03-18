import { motion } from "framer-motion";
import { styles } from "./styles";
import photo from "../components/MainSection/photo/a7.jpg";
import photo1 from "../assets/IMG.png";

import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={`relative w-full h-[800px] mx-auto`}>
      <div
        className={`absolute z-10 inset-0 top-40 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
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
      <div className="animate-opacity absolute top-[400px] w-full flex justify-center z-0">
        <Image src="https://www.jsmastery.pro/_next/image?url=%2Fassets%2Fcourses%2Fimages%2Fstackoverflow-clone-2.png&w=640&q=100" alt="pic" width={400} height={400} />
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
