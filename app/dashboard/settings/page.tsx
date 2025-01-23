import { Pages } from '@/app/lib/constants';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Settings',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Settings</h1>
      </div>
      <Link href={`${Pages.Settings}/drop/invoices`}>Reset Invoices</Link>
    </div>
  );
}
