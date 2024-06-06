import Image from "next/image";
export default function CodeWorkersLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none`}
    >
      <Image src="/icon.svg" alt="CodeWorkers Logo" width={55} height={0} />
      <p className="text-2xl">CodeWorkers</p>
    </div>
  );
}