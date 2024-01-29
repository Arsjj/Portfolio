import Link from "next/link";
import { GithubOutlined } from "@/icons/GithubOutlined";
import { LinkedinOutlined } from "@/icons/LinkedinOutlined";
import { Copyright } from "@/icons/Copyright";

function Footer() {
  return (
    <footer>
      <div className="w-full h-[3px] bg-[url('https://images5.alphacoders.com/448/thumbbig-448975.webp')]"></div>
      <div className="relative w-full max-w-[1920px] mx-auto">
        <div className="gap-3 p-3 text-white/70 text-xs fill-white/80">
          <div className="flex mx-auto w-fit gap-2 px-1">
            Copyright
            <Copyright />
            All rights reserved
          </div>
          <div className=" fill-transparent text-xs stroke-slate-800">
          </div>
        </div>
        <div className="absolute max-xsm:relative max-xsm:my-auto right-0 top-0 h-full flex items-center text-[22px] gap-3 px-4">
          <Link
            href="http://github.com/Arsjj"
            target="_blank"
            className="fill-aqua/80 hover:fill-aqua/70"
            aria-label="githab link"
          >
            <GithubOutlined />
          </Link>
          <Link
            href="http://www.linkedin.com/in/arsen-abrahamyan-23269a248/"
            target="_blank"
            className="fill-aqua/80 hover:fill-aqua/70"
            aria-label="linkedin link"
          >
            <LinkedinOutlined />
            {/* <div className="w-8 "> */}
            {/* </div> */}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
