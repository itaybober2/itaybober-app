import React from 'react';

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome to my web app!</h2>
        <h3>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          My name is Itay Bober, and I'm a software developer at the Product Jam course. <br/>
          Feel free to wonder around and test the websites functionality and design (bad and lazy) choices.
        </h3>
      </div>
    </main>
  );
}
