import Skills from "./Components/Skills";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="w-full py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-full flex flex-col items-center gap-16 text-orange">
          <div className="px-2">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Personal Details
            </h2>
            <table className="text-[18px]">
              <tbody>
                <tr>
                  <td className="text-white">Name</td>
                  <td className="space">Arsen Abrahamyan</td>
                </tr>
                <tr>
                  <td className="text-white">Date of birth</td>
                  <td className="space">17.09.1991</td>
                </tr>
                <tr>
                  <td className="text-white">Address</td>
                  <td className="space">Yeravan, Armenia</td>
                </tr>
                <tr>
                  <td className="text-white">Email</td>
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
                  <td className="text-white">Phone number</td>
                  <td className="space">+37493331992</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="text-2xl text-center font-semibold mb-6">Skills</h2>
            <Skills />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
