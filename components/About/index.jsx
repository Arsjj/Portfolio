import Skills from "./Components/Skills/index.jsx";

function About() {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center gap-16 py-28 text-orange"
    >
      <div>
        <h2 className="text-2xl font-semibold text-center pb-4">
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
              <td className="text-white">Addres</td>
              <td className="space">Yeravan, Armenia</td>
            </tr>
            <tr>
              <td className="text-white">Email</td>
              <td className="space">
                <a className="text-[#61dafb]" href="mailto:arsjj7@gmail.com">
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
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold pb-4">Skills</h2>
        <div className="flex items-end text-white">
          <Skills /><div className="pl-2 py-1">...</div>
        </div>
      </div>
    </div>
  );
}

export default About;
