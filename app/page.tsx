import React from 'react';
import Link from "next/link";
import './design/page.module.css'

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
        <div className='main-page-links'>
          <br/>
          <Link style={{fontSize: 24}} href="/tic-tac-toe">Go to Tic Tac Toe 🎲🎮</Link>
            <br/>
            <br/>
          <Link style={{fontSize: 24}} href="/nasa">go to NASA 🚀</Link>
            <br/>
            <br/>
          <Link style={{fontSize: 24}} href={"/design"}>go to main Design ❤️‍🔥</Link>

        </div>
      </div>
    </main>
  );
}
