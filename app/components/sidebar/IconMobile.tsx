import clsx from "clsx";
import Link from "next/link";

export const IconMobile = () => {
  return (
    <Link
      href="/users"
      className={clsx(
        `
          group 
          flex 
          gap-x-3 
          text-sm 
          leading-6 
          font-semibold 
          w-full 
          justify-center 
          p-4 
        
        `
      )}
    >
      <img className="h-9 w-9" src="/images/logo-1.png" alt="Logo" />
    </Link>
  );
};
