import Image from 'next/image';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <div className="p-5">
        <Image
          src="logo.svg"
          height={50}
          width={50}
          alt="logo"
          className="text-red-500"
        />
      </div>
      {children}
    </div>
  );
}
