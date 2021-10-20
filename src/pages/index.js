import { getEntry } from 'lib/contentDelivery';
import data from 'lib/pages';
import Layout from '@/layout';
import Welcome from '@/sections/Welcome';
import Footer from '@/sections/Footer';

const Home = ({ fields }) => {
  const { pageTitle } = fields;
  const { page, welcome, footer } = data;

  return (
    <>
      <Layout data={page}>
        <Welcome data={welcome} pageTitle={pageTitle} />
        <Footer data={footer} />
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const mainPage = await getEntry('6BgwDknIqPjwQikksJlXHz');

  const { fields } = mainPage;

  return {
    props: { fields },
  };
};
