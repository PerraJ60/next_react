import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import Layout from '../src/components/Layout';
import styles from '../styles/Home.module.css';

export const launchesQuery = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link

        mission_patch
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export default function Spacex({ launches }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>SpaceX Launches</h1>
          <p className={styles.description}>
            <a href='https://www.spacex.com/launches/'>Latest launches</a> from
            SpaceX
          </p>
          <div className={styles.grid}>
            {launches.map((launch) => {
              return (
                <a key={launch.id} className={styles.card}>
                  <h3>{launch.mission_name}</h3>
                  <p>
                    <strong>Launch Date:</strong>{' '}
                    {new Date(launch.launch_date_local).toLocaleDateString(
                      'en-US'
                    )}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: launchesQuery,
  });

  return {
    props: {
      launches: data.launchesPast,
    },
  };
}
