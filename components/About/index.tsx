import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Skills from "./Components/Skills";

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <div id="about" className="w-full py-32 max-md:py-28">
      <div className="relative z-1 w-full flex flex-col items-center gap-16 text-white">
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          <div className="px-1 text-white">
            <div className="text-2xl font-semibold text-center mb-6 text-orange">
              Personal Details
            </div>
            <table className="text-[18px]">
              <tbody>
                <tr>
                  <td className="flex">
                    <i className="bx bx-user bx-burst-hover mr-3 text-orange p-2 shadow-icon rounded-lg" />
                    <div>Name</div>
                  </td>
                  <td className="space">Arsen Abrahamyan</td>
                </tr>
                <tr>
                  <td className="flex">
                    <i className="bx bx-calendar bx-burst-hover mr-3 text-orange p-2 shadow-icon rounded-lg" />
                    <div>Date of birth</div>
                  </td>
                  <td className="space">17.09.1991</td>
                </tr>
                <tr>
                  <td className="flex">
                    <i className="bx bx-home bx-burst-hover mr-3 text-orange p-2 shadow-icon rounded-lg" />
                    <div>Address</div>
                  </td>
                  <td className="space">Yeravan, Armenia</td>
                </tr>
                <tr>
                  <td className="flex">
                    <i className="bx bx-mail-send bx-burst-hover mr-3 text-orange p-2 shadow-icon rounded-lg" />
                    <div>Email</div>
                  </td>
                  <td className="space">
                    <a
                      className="text-[#61dafb]"
                      href="mailto:arsjj7@gmail.com"
                    >
                      arsjj7@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="flex">
                    <i className="bx bxs-phone-call bx-burst-hover  mr-3 text-orange p-2 shadow-icon rounded-lg" />
                    <div>Phone number</div>
                  </td>
                  <td className="space">+37493331992</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
        <Skills />
      </div>
    </div>
  );
}

export default About;
