import FooterNav from "./footer-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Footer = () => {
  return (
    <div className="flex flex-col items-center lg:items-start p-16 pb-12 gap-8 lg:gap-16 rounded-xl font-light relative flex-1 bg-primary text-white dark:text-black">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* AVATAR  */}
        <Avatar className="size-[60px]">
          <AvatarImage src="https://pub-e1f3891360c64489aeae04e051dff80e.r2.dev/photoblog/photos/Julia-%20Avatar.jpg" />
          <AvatarFallback>EC</AvatarFallback>
        </Avatar>

        {/* NAME  */}
        <div className="flex flex-col items-center lg:items-start gap-[2px]">
          <h1 className="text-2xl">JuliaGart</h1>
          <p className="text-sm opacity-60">Photographer</p>
        </div>
      </div>
      <div className="grid lg:w-full grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-14">
        <FooterNav
          title=""
          links={[
            { title: "Home", href: "/" },
            { title: "Travel", href: "/travel" },
            { title: "Discover", href: "/discover" },
            { title: "Blog", href: "/blog" },
            { title: "About", href: "/about" },
          ]}
        />
        {/* <FooterNav
          title="CMS"
          links={[{ title: "Dashboard", href: "/dashboard" }]}
        />
        <FooterNav
          title="Utility"
          links={[{ title: "Screensaver", href: "/screensaver" }]}
        /> */}
      </div>

      {/* Attribution */}
      <div className="text-xs md:text-sm text-center md:text-left">
        <p>
          <span className="opacity-60">Copyright © 2025 JuliaGart </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
