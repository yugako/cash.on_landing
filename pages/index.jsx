import Head from 'next/head'
import Banner from '../components/Banner';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features';
import { Footer } from '../components/Footer';

import Navigation from '../components/Navigation';

const features = [
  {
    image: '/icons/money_bag.svg',
    title: 'Financial Advice',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    image: '/icons/chart.svg',
    title: 'Market Analysis ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    image: '/icons/browser.svg',
    title: 'Web Solution',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
  }
]

export default function Home() {
  return (
    <div className='app'>
      <Head>
        <title>Cash.On - Manage your money easy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Banner />
      <Features features={features} />
      <Footer />
    </div>
  )
}
