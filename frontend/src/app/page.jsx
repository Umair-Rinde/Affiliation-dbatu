
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import NavRoute from "./components/common/NavRoute";
import NavTitle from "./components/common/NavTitle";
import SideNavbar from "./components/common/SideNavbar";
import AllForms from "./components/home/AllForms";

const Home = () => {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center">
      <NavTitle pageTitle="Home"/>
      <Header />
      <div className="flex w-full py-2">
        <SideNavbar current="Home" />
        <page className="w-5/6 flex flex-col">
          <NavRoute 
            routes={[ 
              {title:'Institute Login',path: '/'} 
            ]} 
          />
          <section className="w-full h-full px-2 py-10">
            <div className="w-full h-full flex-col gap-3 p-3 border border-blue-500">
              <h2 className="font-semibold text-2xl mx-2">Forms</h2>
              <DividerX />
              <AllForms />
            </div>
          </section>
        </page>
      </div>
      <Footer />
    </main>
  );
}

const DividerX = () => <div className="w-96 h-[0.5x] bg-black my-4"></div>

export default Home;