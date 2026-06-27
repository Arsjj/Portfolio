import { Copyright } from "@/icons/Copyright";

function Footer() {
  return (
    <footer className="max-sm:hidden bg-black border-t border-t-white/20">
      <div className="w-full max-w-7xl mx-auto flex justify-center gap-3 text-white/70 text-xs fill-white/80">
        <div className="flex w-fit gap-2 px-2 py-3">
          <span>Copyright</span>
          <Copyright />
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
