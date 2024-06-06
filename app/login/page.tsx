import CodeWorkersLogo from '@/app/ui/codeworkers-logo';
import LoginForm from '@/app/ui/login-form';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-white p-3 ml:h-36">
          <div className="w-32 text-white md:w-36">
            <CodeWorkersLogo color='text-black' />
          </div>
        </div>
        <LoginForm />
        <Link className='text-[12px] text-right hover:text-orange-600' href="/">Back to Home</Link>
      </div>
    </main>
  );
}
