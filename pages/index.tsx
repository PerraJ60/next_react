import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import { format } from 'date-fns';
import { initializeApollo } from 'src/apolloClient';
import styles from '../styles/Home.module.css';

const ResumeQuery = gql`
  query ResumeQuery {
    bio {
      name
      email
      tagline
      github
      linkedin
    }
    positions {
      id
      title
      company
      location
      years
      months
      startDate
      endDate
      achievements
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ResumeQuery);

  if (error) {
    return <span>Error... oops!</span>;
  }

  if (loading) {
    return (
      <header className={styles.header}>
        <h1>Per Johansson</h1>
        <h2>loading...</h2>
      </header>
    );
  }
  const { bio, positions } = data;

  return (
    <>
      <Head>
        <title>{bio.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <h1>{bio.name} </h1>
        <h2>{bio.tagline}</h2>
      </header>

      <div className={styles.split}>
        <div className={styles.left}>
          <h2>Contact</h2>
          <p>
            <strong>Email</strong>{' '}
            <a href={`mailto:${bio.email}`}>{bio.email}</a>
          </p>
          <p>
            <strong>GitHub</strong>{' '}
            <a href={bio.github}>{bio.github.replace('https://', '')}</a>
          </p>
          <p>
            <strong>LinkedIn</strong>{' '}
            <a href={bio.linkedin}>{bio.linkedin.replace('https://', '')}</a>
          </p>
          <p>
            <img
              src='/images/PJ2016.png'
              className={styles.oimage}
              alt='pic'
            ></img>
          </p>
        </div>

        <div className={styles.right}>
          <h2>Experience</h2>
          {positions.map((position) => {
            const length = [
              position.years > 0 ? `${position.years} yrs` : null,
              position.months > 0 ? `${position.months} mths` : null,
            ]
              .filter((str) => str)
              .join(' ');

            return (
              <div key={position.id}>
                <h3>{position.title}</h3>
                <p className={styles.light}>
                  {position.company} | {position.location}
                </p>
                <p className={styles.light}>
                  {format(new Date(position.startDate), 'MMM yyyy')} -{' '}
                  {position.endDate
                    ? format(new Date(position.endDate), 'MMM yyyy')
                    : 'Current'}{' '}
                  ({length})
                </p>
                <ul>
                  {position.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  //
  // This is always run on server-side!
  //
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: ResumeQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
