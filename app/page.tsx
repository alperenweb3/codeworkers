import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to CodeWorkers</h1>
      <Image src="/logo.svg" alt="CodeWorkers Logo" width={225} height={0} />
    </main>
  );
}
