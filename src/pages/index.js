import Head from 'next/head'
import Nav from '../components/Nav'
import Product from '@/components/Product'
import Items from '@/components/Items'
import axios from 'axios'

import styles from '@/styles/Home.module.css'




export async function getStaticProps(context) {
  const {data} = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1').then(res=>res.data)

  return {
    props: {data}, // will be passed to the page component as props
  }
}


export default function Home(data) {
  // console.log(data.data,'llllll')
  const myStyle={
    maxheight:'1500px',
    minheight:'100px',
    backgroundColor:'black'
  }
  return (
    <>
    <div style={styles}>
      <div style={myStyle}>
        <Nav/>
        <Items/>
        <Product posts={data.data} />
      </div>
    </div>

    </>
  )
}
