import clsx from "clsx";
import Link from "next/link";

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
      <div className="h-9 w-9 shrink-0" aria-hidden="true">
        <img className="mx-auto w-auto" src="/images/logo-1.png" alt="Logo" />
      </div>
    </Link>
  );
};

export default SocializeIcon;
