import { Suspense } from 'react';
import AccountPageContent from '@/app/Components/Account/AccountPageContent';

function AccountPageFallback() {
  return (
    <div className="container mx-auto py-10 md:px-40">
      <div className="flex items-center justify-center h-96">
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<AccountPageFallback />}>
      <AccountPageContent />
    </Suspense>
  );
}
