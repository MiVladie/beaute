import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import Banner from './containers/Banner/Banner';
import Section from './containers/Section/Section';
import Intro from './components/Intro/Intro';
import Team from './components/Team/Team';
import Interstitial from './components/Interstitial/Interstitial';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Map from './components/Map/Map';
import Footer from './containers/Footer/Footer';

import salon from './assets/images/salon.jpg';
import member1 from './assets/images/member1.jpg';
import member2 from './assets/images/member2.jpg';
import member3 from './assets/images/member3.jpg';
import member4 from './assets/images/member4.jpg';
import info1 from './assets/images/info1.jpg';
import info2 from './assets/images/info2.jpg';

class App extends Component {
  render () {
    return (
      <Layout>
        <Navigation />
        <Banner />

        <Section id = 'welcome'>
          <Intro
            image = { salon }
            main = 'Welcome to beauté'
            message = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum, Tempora Aliquid Labore Minus. Nemo Maxime, Veniam! Fugiat Odio Nam Eveniet Ipsam Atque, Corrupti Porro'
            person = 'Stella Martin' />
        </Section>

        <Section 
          id = 'team' 
          name = 'Our beauty experts' 
          description = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.'>
          <Team data = {[
            { image: member1, name: 'Mellisa Smith', type: 'Stylist', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum' },
            { image: member2, name: 'Nathan Soto', type: 'Stylist', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum' },
            { image: member3, name: 'Maegan Gilbert', type: 'Stylist', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum' },
            { image: member4, name: 'Jenna Fox', type: 'Stylist', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum' }
          ]} />
        </Section>

        <Interstitial
          image = { info1 }
          imageAlt = 'Beauty Salon Background'
          main = 'Our priorities'
          description = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum, Tempora Aliquid Labore Minus. Nemo Maxime, Veniam! Fugiat Odio Nam Eveniet Ipsam Atque, Corrupti Porro.'
          linkText = 'Book now'
          linkTo = '#contact' />

        <Section  
          id = 'services' 
          name = 'Beauté services' 
          description = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.'>
          <Services data = {[
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' },
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' },
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' },
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' },
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' },
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' },
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' },
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' },
            { name: 'Hair dressing', description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.', price: '12.00' }
          ]} />
        </Section>
        
        <Interstitial
          image = { info2 }
          main = 'Main focus'
          description = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum, Tempora Aliquid Labore Minus. Nemo Maxime, Veniam! Fugiat Odio Nam Eveniet Ipsam Atque, Corrupti Porro.'
          linkText = 'Book now'
          linkTo = '#contact' />

        <Section  
          name = 'Testimonials' 
          description = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.'
          style = {{ width: '100%' }}>
          <Testimonials
            data = {[
              { person: 'Maria Parker', type: 'Regular client', text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum, Tempora Aliquid Labore Minus.' },
              { person: 'Alisha Lowry', type: 'Regular client', text: 'Praesent semper a justo nec mollis. Curabitur eget iaculis mi. Etiam magna risus, aliquam quis ligula tristique, auctor ultrices tortor.' },
              { person: 'Zoha Yates', type: 'Regular client', text: 'Nullam iaculis nunc nec massa rutrum semper. Aenean aliquet sem eu congue lobortis. Nulla malesuada leo eget nunc vehicula, vitae scelerisque diam dictum.' }
            ]} />
        </Section>
        
        <Section  
          id = 'contact'
          name = 'Contact us' 
          description = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum.'
          style = {{ paddingTop: '0' }}>
          <Contact 
            address = '203 Fake St. Mountain View, San Francisco, California, USA'
            phone = '+44 7342 216193'
            email = 'letscomit@gmail.com'
            open = {[
              ['Monday-Friday', '08:00AM - 09:00PM'],
              ['Saturday', '10:00AM - 06:00PM'],
              ['Sunday', 'Closed'] ]} />
        </Section>

        <Map location = {{ lat: 51.5007292, lng: -0.1246254 }} zoom = { 15 } />

        <Footer />

      </Layout>
    )
  }
}

export default App;
