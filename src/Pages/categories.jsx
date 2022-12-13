import React from "react";
import CategoryNavigation from "../Components/Header-components/categoriesHeader";
import Footer from "../Components/Footer-components/Footer";
import CatBanner from "../Components/Header-components/Hero_section/cat-banner";
const Categories = () => {
  return (
    <div className=" max-w-[100vw]  w-[100vw] h-full relative flex flex-col box-border ">
      <header className="w-fit h-fit flex flex-col gap-[64px]">
        <section className="w-fit h-fit ">
          <div className="w-full h-full ">
            <CategoryNavigation />
          </div>
        </section>
        <section className=" w-[100vw] h-full">
          <div className="w-full h-full">
            <CatBanner />
          </div>
        </section>
      </header>
      <main className=" w-[100vw] max-w-[100vw] h-[100vh] min-h-[100vh] bg-[#fff] ">
        <div className=""></div>
      </main>
      <footer className="  w-[100vw] max-w-[100vw] h-fit ">
        <Footer />
      </footer>
    </div>
  );
};

export default Categories;
