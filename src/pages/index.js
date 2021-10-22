import { getEntry } from 'lib/contentDelivery';
import data from 'lib/pages';
import Layout from '@/layout';
import Welcome from '@/sections/Welcome';
import Footer from '@/sections/Footer';

const Home = ({ fields }) => {
  const { title } = fields;
  const { welcome, footer } = data;

  return (
    <>
      <Layout title={title}>
        <Welcome data={welcome} />
        <Footer data={footer} />
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const mainPage = await getEntry('3fWxgtJ3P3LF5uXWTNhXt4');

  const { fields } = mainPage;

  return {
    props: { fields },
  };
};
