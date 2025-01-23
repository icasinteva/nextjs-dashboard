import { Pages } from '@/app/lib/constants';
import { lusitana } from '@/app/ui/fonts';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Settings',
};

export default async function Page() {
  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Settings</h1>
      </div>
      <div className='mt-4 flex items-center gap-2 md:mt-8'>
        <Link
          href={Pages.ResetInvoices}
          className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
        >
          <span className='hidden md:block'>Reset Invoices</span>{' '}
          <ArrowPathIcon className='h-5 md:ml-4' />
        </Link>
      </div>
    </div>
  );
}
