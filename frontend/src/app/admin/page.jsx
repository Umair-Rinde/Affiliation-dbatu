'use client';
import Footer from "@/app/components/common/Footer";
import Header from "@/app/components/common/Header";
import NavRoute from "@/app/components/common/NavRoute";
import AdminSideNavbar from "@/app/components/admin/AdminSideNavbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminHome = () => {
//   const router = useRouter();
//   useEffect(() => {
//     router.push('/login');
//   }, []);
  return (
    <main className="flex w-screen min-h-screen flex-col items-center">
      <Header />
      <div className="flex w-full py-2">
        <AdminSideNavbar current="Home" />
        <page className="w-5/6 flex flex-col">
          <NavRoute 
            routes={[ 
              {title:'Admin Login',path: '/admin'},
              {title:'View Annexure', path: '/admin'}
            ]} 
          />
          <section className="w-full h-full px-2 py-10">
            <div className="w-full h-full flex-col gap-3 p-3 border border-blue-500">
              {/* <h2 className="font-semibold text-2xl mx-2 w-full border-b">Forms</h2>
              <DividerX />
              <AllForms /> */}
            </div>
          </section>
        </page>
      </div>
      <Footer />
    </main>
  );
}

const DividerX = () => <div className="w-96 h-[0.5x] bg-black my-4"></div>

export default AdminHome;