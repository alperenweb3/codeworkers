import Image from "next/image";
import styles from './home.module.css'
export default function CodeWorkersLogo({color}: {color: string}) {
  return (
    <div
      className={`flex flex-row items-center leading-none`}
    >
      <Image src="/icon.svg" alt="CodeWorkers Logo" width={55} height={0} />
      <p className={`text-3xl font-900 ${color}`}>CodeWork<span className={styles.logoSpan}>er</span>s</p>
    </div>
  );
}