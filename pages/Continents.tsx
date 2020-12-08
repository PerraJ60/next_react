import Layout from 'src/components/Layout';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import styles from 'styles/Home.module.css';

export default function Continents({ continents }) {
  console.log('continents', continents);
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>All Continents</h1>

          <p className={styles.description}>Continents</p>

          <div className={styles.grid}>
            {continents.map((continent) => {
              return (
                <a key={continent.code} className={styles.card}>
                  <h3>{continent.name}</h3>
                  <h5>Code: {continent.code}</h5>
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
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetContinents {
        continents {
          name
          code
        }
      }
    `,
  });

  return {
    props: {
      continents: data.continents,
    },
  };
}
