import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@luffyslogic",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/luffys_logic_official/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/m-hassaam-mughal-91668a256/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative  overflow-x-clip" id="footer">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All Rights Reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 ">
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
// Completed
