import Animation from "./Animation";
import { styles } from "../../utils/styles";

const Hero = () => {
  return (
    <section id="home" className={`relative w-full h-[850px] max-sm:h-[780px] mx-auto`}>
      <div
        className={`relative max-sm:relative max-sm:top-0 max-sm:pt-40  md:mb-20 max-md:mb-6 z-10 inset-0 top-40 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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
      <div className="relative flex justify-center w-full sm:animate-opacity transition-all duration-500 max-sm:left-4 max-sm:scale-[0.8] max-xsm:scale-[0.7] max-sm:relative max-sm:top-0">
        <Animation />
      </div>
    </section>
  );
};

export default Hero;




