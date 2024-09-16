import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import Head from "next/head";

const DefaultLayout = (props) => {
  let { pageTitle, children } = props;
  if (pageTitle == "Agung Prasetyo | Junior Front End Web Developer") {
    pageTitle = "Agung Prasetyo | Junior Front End Web Developer";
  } else {
    pageTitle =
      pageTitle + " - Agung Prasetyo | Junior Front End Web Developer";
  }
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <div
        id="container"
        className="flex flex-column min-h-screen lg:w-[60%] mx-auto lg:py-[90px]"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
      >
        {children}
      </div>
      <NavMenu />
      <Footer />
    </>
  );
};

export default DefaultLayout;