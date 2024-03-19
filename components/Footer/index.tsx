import Link from "next/link";
import { GithubOutlined } from "@/icons/GithubOutlined";
import { LinkedinOutlined } from "@/icons/LinkedinOutlined";
import { Copyright } from "@/icons/Copyright";

function Footer() {
  return (
    <footer className="bg-black py-2 border-t border-t-white/20">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="gap-3 p-3 text-white/70 text-xs fill-white/80">
          <div className="flex w-fit gap-2 px-1">
            Copyright
            <Copyright />
            All rights reserved
          </div>
          {/* <div className="flex mx-auto w-fit gap-2 px-1">
            Made with Next / Tailwind / Framer Motion
          </div> */}
        </div>
        <div className="absolute w-fit right-0 top-0 h-full flex items-center text-[22px] gap-3 px-4">
          <Link
            href="http://github.com/Arsjj"
            target="_blank"
            className="fill-white/80 hover:fill-white/70"
            aria-label="githab link"
          >
            <GithubOutlined />
          </Link>
          <Link
            href="http://www.linkedin.com/in/arsen-abrahamyan-23269a248/"
            target="_blank"
            className="fill-white/80 hover:fill-white/70"
            aria-label="linkedin link"
          >
            <LinkedinOutlined />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
