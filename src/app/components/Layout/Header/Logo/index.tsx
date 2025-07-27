import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/Logo.png"
        alt="logo"
        width={60}
        height={60}
        style={{ width: "60", height: "60" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
