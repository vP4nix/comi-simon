import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Comi Simon's Homepage" />
        <meta name="author" content="Comi Simon" />
        {/* <meta name="author" content="28n" /> */}
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Comi Simon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comi_simon" />
        <meta name="twitter:creator" content="@comi_simon" />
        <meta property="og:site_name" content="Comi Simon" />
        <meta name="og:title" content="Comi Simon" />
        <meta property="og:type" content="website" />
        <title>Comi Simon</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
