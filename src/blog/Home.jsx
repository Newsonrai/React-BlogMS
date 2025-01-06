import React from 'react'
import Layout from '../components/navbar/layout/Layout'
import Card from './component/card/Card'

const Home = () => {
  return (
    <Layout>
        <div className='flex flex-wrap justify-center space-x-5 mt-5 mb-4'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </Layout>
  )
}

export default Home
