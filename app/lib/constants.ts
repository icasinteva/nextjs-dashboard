export enum Pages {
  Home = '/',
  LogIn = '/login',
  Dashboard = '/dashboard',
  Invoices = '/dashboard/invoices',
  Customers = '/dashboard/customers',
  CreateInvoice = '/dashboard/invoices/create',
  UpdateInvoice = '/dashboard/invoices/:id/edit',
  CreateCustomer = '/dashboard/customers/create',
  UpdateCustomer = '/dashboard/customers/:id/edit',
  Settings = '/dashboard/settings',
  ResetInvoices = '/dashboard/settings/drop/invoices',
}
