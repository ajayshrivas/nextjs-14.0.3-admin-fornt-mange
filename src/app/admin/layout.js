import { Suspense } from 'react'
import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
import Loading from "./loading";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <div className="flex flex-col h-screen bg-gray-100">
      <Topbar/>
      <div className="flex-1 flex">
        <Sidebar/>
        {/* Include shared UI here e.g. a header or sidebar */}
        <div className="flex-1 p-4">
          <Suspense fallback={<Loading />}>
          {children}
          </Suspense>
         </div>
       </div>
     </div>
    </section>
  )
}