import Customers from '@/app/dashboard/customers';
import Invoices from '@/app/dashboard/invoices';
import Layout from '@/app/dashboard/layout';

export default function Pagem() {
  return (
<>
    <Layout>
           <p>Dashboard Page</p>
      <Customers />
      <Invoices />
      </Layout>
      
      
    </>
  );
}
