import Head from "next/head";
const Layout = ({ children, ...pageProps }) => {
  const { layout } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.css"
        />
        <link
          href="assets/css/colors/color-2.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-2"
        />
        <link
          href="assets/css/colors/color-3.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-3"
        />
        <link
          href="assets/css/colors/color-4.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-4"
        />
        <link
          href="assets/css/colors/color-5.css"
          rel="alternate stylesheet"
          type="text/css"
          title="color-5"
        />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
