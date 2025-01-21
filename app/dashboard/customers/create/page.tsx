import { Pages } from '@/app/lib/constants';
import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Customer',
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: Pages.Customers },
          {
            label: 'Create Customer',
            href: Pages.CreateCustomer,
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
