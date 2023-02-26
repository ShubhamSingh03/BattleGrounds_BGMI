import { Helmet } from "react-helmet-async";

const HelmetConsumer = ({ pageTitle, pageFavicon }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="icon" type="image/png" href={pageFavicon} sizes="16x16" />
      </Helmet>
    </>
  );
};

export default HelmetConsumer;
