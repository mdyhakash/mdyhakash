import Footer from "./components/Footer";
import Hero from "./components/Hero";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <Footer />
      </div>
    </main>
  );
};

export default page;
