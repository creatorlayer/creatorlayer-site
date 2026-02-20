import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Creatorlayer – Income verification for RBF lenders"
      description="Automated, GDPR-friendly creator income verification for European revenue-based financing lenders."
    >
      <main style={{padding: '4rem 1rem', maxWidth: 800, margin: '0 auto'}}>
        <h1>Creatorlayer</h1>
        <p>
          Automated, GDPR-friendly creator income verification for European revenue-based financing lenders.
        </p>
        <p>
          Creators connect their YouTube and Twitch accounts via OAuth. You receive verified income data,
          trends, and basic fraud checks in seconds.
        </p>
        <p>
          Pricing is simple: <strong>€100</strong> per verification.
        </p>
        <p>
          For technical integration details, visit{' '}
          <a href="http://localhost:3001" target="_blank" rel="noreferrer">
            the API documentation
          </a>
          {' '}during development (and api.creatorlayer.eu in production).
        </p>
      </main>
    </Layout>
  );
}