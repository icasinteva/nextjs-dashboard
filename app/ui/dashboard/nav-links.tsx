'use client';

import { Pages } from '@/app/lib/constants';
import {
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const env = process.env.NODE_ENV;

const links = [
  { name: 'Home', href: Pages.Dashboard, icon: HomeIcon },
  {
    name: 'Invoices',
    href: Pages.Invoices,
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: Pages.Customers, icon: UserGroupIcon },
  {
    name: 'Settings',
    href: Pages.Settings,
    icon: Cog6ToothIcon,
    env: 'development',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links
        .filter((link) => !link.env || env === link.env)
        .map(({ icon, name, href }) => {
          const LinkIcon = icon;

          return (
            <Link
              key={name}
              href={href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === href,
                }
              )}
            >
              <LinkIcon className='w-6' />
              <p className='hidden md:block'>{name}</p>
            </Link>
          );
        })}
    </>
  );
}
