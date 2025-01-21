import { Pages } from '@/app/lib/constants';
import { fetchCustomerById } from '@/app/lib/data';
import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Update Customer',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  const customer = await fetchCustomerById(id);

  if (!customer) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: Pages.Customers },
          {
            label: 'Edit Customer',
            href: `${Pages.UpdateCustomer.replace(':id', id)}`,
            active: true,
          },
        ]}
      />
      <Form customer={customer} />
    </main>
  );
}
