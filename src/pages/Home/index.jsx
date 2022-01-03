import React, { useEffect, useState, lazy, Suspense } from 'react';
import getRepositories from 'api/services/repositories';
import CardLoading from 'components/atoms/Card/loading';
const CenterViewport = lazy(() => import('components/molecules/CenterViewport'));
const Card = lazy(() => import('components/atoms/Card'));
const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({
    error: false,
    message: '',
    documentation_url: '',
  });
  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await (await getRepositories()).data;
        setRepositories(response);
        setIsLoading(false);
      } catch (error) {
        const response = error?.response?.data;
        setError({
          error: true,
          message: response?.message || 'Error',
          documentation_url: response?.documentation_url || 'Error',
        });
        setIsLoading(false);
      }
    };
    getRepos();
  }, []);
  return (
    <main className='container'>
      {isLoading ? (
        <section className='repositories' id='content'>
          {[...Array(6)].map((_, i) => (
            <CardLoading key={`loading${i}`} />
          ))}
        </section>
      ) : repositories.length && !isLoading ? (
        <section className='repositories' id='content'>
          {repositories.map((repository) => (
            <Suspense key={`${repository.name} - ${repository.html_url}}`} fallback={<CardLoading />}>
              <Card key={repository.name} name={repository.name} url={repository.html_url}></Card>
            </Suspense>
          ))}
        </section>
      ) : error.error && !isLoading ? (
        <CenterViewport>
          <h4>{error.documentation_url}</h4>
          <p>{error.message}</p>
        </CenterViewport>
      ) : (
        <CenterViewport>
          <p>Don't have a repository</p>
        </CenterViewport>
      )}
    </main>
  );
};

export default Home;
