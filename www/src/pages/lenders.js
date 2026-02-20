import React from 'react';
import Layout from '@theme/Layout';

export default function LendersPage() {
  return (
    <Layout
      title="For RBF lenders"
      description="How Creatorlayer works for European revenue-based financing lenders."
    >
      <main style={{padding: '4rem 1rem', maxWidth: 800, margin: '0 auto'}}>
        <h1>For RBF lenders</h1>
        <p>
          Creatorlayer lets you verify creator income from platforms like YouTube and Twitch in seconds,
          using a simple REST API and permission-based OAuth flows.
        </p>
        <h2>What you get</h2>
        <ul>
          <li>Verified income for the last 30 and 90 days.</li>
          <li>Basic fraud flags and a simple risk score.</li>
          <li>Recommended loan amount based on historic revenue.</li>
        </ul>
        <h2>How it fits your workflow</h2>
        <ol>
          <li>You send your applicant a Creatorlayer connect link.</li>
          <li>The creator authorizes access to their channels.</li>
          <li>You call the Creatorlayer API and receive a structured verification snapshot.</li>
        </ol>
        <p>
          See the full technical details in the{' '}
          <a href="http://localhost:3001" target="_blank" rel="noreferrer">
            API documentation
          </a>.
        </p>
      </main>
    </Layout>
  );
}