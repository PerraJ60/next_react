import { useQuery, gql } from '@apollo/client';
import { initializeApollo } from '../src/apolloClient';
import Layout from '../src/components/Layout';
import styles from '../styles/Home.module.css';

export const prodQuery = gql`
  query prodQuery {
    products {
      name
      id
      price
      type
      qty
      image
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(prodQuery);
  if (error) {
    return <span>Error... oops!</span>;
  }

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>All Products</h1>

          <p className={styles.description}>Tools & Accessories</p>

          <div className={styles.grid}>
            {data.products.map((product) => {
              return (
                <a key={product.id} className={styles.card}>
                  <h6>{product.name}</h6>
                  <p>
                    <img
                      src={product.image}
                      className={styles.pimage}
                      alt='pic'
                    ></img>
                  </p>
                  <h6>In store: {product.qty}</h6>
                </a>
              );
            })}
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  //
  // This is always run on server-side!
  //
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: prodQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
