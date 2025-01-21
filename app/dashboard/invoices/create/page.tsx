import { Pages } from '@/app/lib/constants';
import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: Pages.Invoices },
          {
            label: 'Create Invoice',
            href: Pages.CreateInvoice,
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
