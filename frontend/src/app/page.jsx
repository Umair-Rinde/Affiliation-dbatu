
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import NavRoute from "./components/common/NavRoute";
import NavTitle from "./components/common/NavTitle";
import SideNavbar from "./components/common/SideNavbar";

const Home = () => {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center">
      <NavTitle pageTitle="Home"/>
      <Header />
      <div className="flex w-full py-2">
        <SideNavbar current="Home" />
        <page className="w-5/6 flex flex-col">
          <NavRoute 
            routes={[ {title:'Institute Login',path: '/'} ]} 
          />
          <section className="w-full h-full p-2">
            <div className="w-full h-full border border-blue-500">
              
            </div>
          </section>
        </page>
      </div>
      <Footer />
    </main>
  );
}

export default Home;