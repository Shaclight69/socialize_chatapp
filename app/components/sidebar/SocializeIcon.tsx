import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const SocializeIcon = () => {
  return (
    <Link
      href="/users"
      className={clsx(
        `
      group 
      flex 
      gap-x-3 
      rounded-md 
      p-1
      text-sm 
      leading-6 
      font-semibold 
    
    `
      )}
    >
      <div aria-hidden="true">
        {/* <img className="mx-auto w-auto" src="/images/logo-1.png" alt="Logo" /> */}
        <Image
          height={9}
          width={9}
          sizes=""
          className="shrink-0"
          src="/images/logo-1.png"
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default SocializeIcon;
