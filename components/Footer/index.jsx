import Link from "next/link";
import { GithubOutlined } from "./components/GithubOutlined";
import { HeartFilled } from "./components/HeartFilled";
import { LinkedinOutlined } from "./components/LinkedinOutlined";

function Footer() {
  return (
    <footer>
      <div className="w-full h-[3px] bg-[url('https://images5.alphacoders.com/448/thumbbig-448975.webp')]"></div>
      <div className="relative w-full max-w-[1920px] flex justify-center mx-auto">
        <div className="flex items-center gap-3 p-[16px] text-orange fill-red-600">
          All rights reserved
          <HeartFilled />
        </div>
        <div className="absolute max-xsm:relative max-xsm:my-auto right-0 top-0 h-full flex items-center text-[23px] gap-3 px-4">
          <Link
            href="http://github.com/Arsjj"
            target="_blank"
            className="fill-aqua hover:fill-aqua/70"
            aria-label="githab link"
          >
            <GithubOutlined className="fill-amber-400" />
          </Link>
          <Link
            href="http://www.linkedin.com/in/arsen-abrahamyan-23269a248/"
            target="_blank"
            className="fill-aqua hover:fill-aqua/70"
            aria-label="linkedin link"
          >
            <LinkedinOutlined className="linkedin" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
