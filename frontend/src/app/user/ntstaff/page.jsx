import Footer from "@/app/components/common/Footer";
import Header from "@/app/components/common/Header";
import NavRoute from "@/app/components/common/NavRoute";
import NavTitle from "@/app/components/common/NavTitle";
import SideNavbar from "@/app/components/common/SideNavbar";
import NtStafform from "../components/forms/ntstaff";

const NtStaffPage = () => {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center">
      {/* <NavTitle pageTitle="Home" /> */}
      <Header />
      <div className="flex w-full py-2">
        <SideNavbar current="Home" />
        <page className="w-5/6 flex flex-col">
          <NavRoute 
            routes={[
                {title:"Institute Login",path:"/login"},
                {title:"Home", path:"/"},
                {title:"Non-teaching staff", path:"/ntstaff"}
            ]} 
        />
          <section className="w-full h-full px-2 py-10">
            <div className="w-full h-full flex-col gap-3 p-3 border border-blue-500">
              <h2 className="font-semibold text-2xl mx-1 w-full border-b pb-2">Non-Teaching Staff</h2>
              <DividerX />
              <NtStafform />
            </div>
          </section>
        </page>
      </div>
      <Footer />
    </main>
  );
};

const DividerX = () => <div className="w-96 h-[0.5x] bg-black my-4"></div>;

export default NtStaffPage;
