import {
  AcademicCapIcon,
  CheckCircleIcon,
  XCircleIcon,
  GlobeEuropeAfricaIcon,
} from '@heroicons/react/24/outline';
import { arimo } from '@/app/ui/fonts';
import { fetchGraduatesStatistics } from '@/app/lib/firebase/data';

const iconMap = {
  graduates: AcademicCapIcon,
  available: CheckCircleIcon,
  notavailable: XCircleIcon,
  freelancing: GlobeEuropeAfricaIcon,
};

export default async function CardWrapper() {
  const {
    totalGraduates,
    totalAvailable,
    totalNotAvailable,
    totalFreelancing,
  } = await fetchGraduatesStatistics();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Graduates" value={totalGraduates} type="graduates" />
      <Card title="Available" value={totalAvailable} type="available" />
      <Card title="Not Available" value={totalNotAvailable} type="notavailable" />
      <Card title="Freelancing" value={totalFreelancing} type="freelancing" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'graduates' | 'available' | 'notavailable' | 'freelancing';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${arimo.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
