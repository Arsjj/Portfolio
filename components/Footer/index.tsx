import { Copyright } from "@/icons/Copyright";

function Footer() {
  return (
    <footer className="relative bg-black py-2 border-t border-t-white/20">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex justify-center gap-3 p-1 text-white/70 text-xs fill-white/80">
          <div className="flex w-fit gap-2 px-1">
            Copyright
            <Copyright />
            All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
