'use client';

import { CustomerState, State, updateCustomer } from '@/app/lib/actions';
import { Pages } from '@/app/lib/constants';
import { CustomerField, CustomerForm } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChangeEvent, useActionState, useState } from 'react';

export default function EditCustomerForm({
  customer,
}: {
  customer: CustomerForm;
}) {
  const initialState: CustomerState = { message: null, errors: {} };
  const { id, name, email } = customer;
  const updateCustomerWithId = updateCustomer.bind(null, id);
  const [state, formAction] = useActionState(
    updateCustomerWithId,
    initialState
  );
  // const [amount, setAmount] = useState(`${customerAmount}`);

  // const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
  //   setAmount(e.target.value);
  // };

  console.log('DEBUG EDIT: ', state);

  return (
    <form action={formAction}>
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        {/* Customer Name */}
        <div className='mb-4'>
          <label htmlFor='name' className='mb-2 block text-sm font-medium'>
            Enter name
          </label>
          <div className='relative'>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Enter name'
              className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              aria-describedby='name-error'
              defaultValue={name}
            />
            <UserCircleIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500' />
          </div>
          <div id='name-error' aria-live='polite' aria-atomic='true'>
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className='mt-2 text-sm text-red-500' key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Customer Email */}
        <div className='mb-4'>
          <label htmlFor='email' className='mb-2 block text-sm font-medium'>
            Enter email
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='name@example.com'
                defaultValue={email}
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                aria-describedby='email-error'
              />
              <EnvelopeIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='email-error' aria-live='polite' aria-atomic='true'>
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className='mt-2 text-sm text-red-500' key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div id='form-error' aria-live='polite' aria-atomic='true'>
          {state.message && (
            <p className='mt-2 text-sm text-red-500'>{state.message}</p>
          )}
        </div>
      </div>
      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href={Pages.Customers}
          className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button type='submit'>Edit Customer</Button>
      </div>
    </form>
  );
}
