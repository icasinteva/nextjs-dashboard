'use client';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

function ClearSearch({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button onClick={onClick}>
        <span className='sr-only'>Clear</span>
        <XMarkIcon className='absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
      </button>
    </>
  );
}

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const [inputValue, setInputValue] = useState('');

  const handleSearch = useDebouncedCallback((term: string) => {
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathName}?${params.toString()}`);
  }, 300);

  const handleClearSearch = () => {
    if (params.get('query')) {
      params.delete('query');
      setInputValue('');
      replace(`${pathName}?${params.toString()}`);
    }
  };

  console.log('SearchParamsQuery', searchParams.get('query'));

  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        type='search'
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        placeholder={placeholder}
        onChange={(e) => {
          setInputValue(e.target.value);
          handleSearch(e.target.value);
        }}
        // defaultValue={searchParams.get('query')?.toString()}
        value={inputValue}
      />
      <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
      <ClearSearch onClick={handleClearSearch} />
    </div>
  );
}
