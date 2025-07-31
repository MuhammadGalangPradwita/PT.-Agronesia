import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={className}>
      <div>
        <Image
        src="/images/logo/Logo.png"
        alt="logo"
        width={60}
        height={60}
        quality={100}
      />
      </div>
    </Link>
  );
};

export default Logo;
