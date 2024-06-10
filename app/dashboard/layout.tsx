'use client';

import SideNav from '@/app/ui/dashboard/sidenav';
// import {useSession} from 'next-auth/react';
// import {redirect} from 'next/navigation';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/login');
  //   } 
  // });
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}