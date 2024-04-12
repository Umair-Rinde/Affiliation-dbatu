
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import NavTitle from "./components/common/NavTitle";
import SideNavbar from "./components/common/SideNavbar";

const Home = () => {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center">
      <NavTitle pageTitle="Home"/>
      <Header />
      <div className="flex w-full">
        <SideNavbar current="Home" />
        <page>

        </page>
      </div>
      <Footer />
    </main>
  );
}

export default Home;