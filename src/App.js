import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { AuthProvider } from './components/auth';
import {Home } from './components/home';
import {About } from './components/about';
import {Navbar } from './components/navbar';
import {NoMatch} from './components/nomatch';
import {Products} from './components/products';
import {OrderConfirmed} from './components/order-confirmed';
import {FeaturedProducts} from './components/featured';
import {NewProducts} from './components/newproducts';
import {Users} from './components/users';
import { UserDetail } from './components/user-details';
import { Admin } from './components/admin';
import { Profile } from './components/profile';
import{Login} from './components/login';
import{Hookme} from './components/statetutorials/hookcounterobjects';
import{CounterFour} from './components/statetutorials/counterfour';
import{Useone} from './components/useeffect/useeffect';
import { HookMouse } from './components/useeffect/hookmouse';
import { HookMouseCleanUp } from './components/useeffect/hookmousecleanup';
import WithoutIncorrectDepedency from './components/useeffect/useeffectWithIncorrectDepedency';
import FetchingData from './components/useeffect/fetchingData';
import FirstReducer from './components/usereducers/firstreducer';
import SecondReducer from './components/usereducers/secondreducer';
import MyUseReducer from './components/usereducers/myusereducer';

function App() {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
         <Route path='/third' element={<MyUseReducer/>}/>
        <Route path='/second' element={<SecondReducer/>}/>
        <Route path='/first' element={<FirstReducer/>}/>
        <Route path='/fetch' element={<FetchingData/>}/>
        <Route path='/show' element={<WithoutIncorrectDepedency/>}/>
        <Route path='/cleanup' element={<HookMouseCleanUp/>}/>
        <Route path='/hookmouse' element={<HookMouse/>}/>
        <Route path='/useone' element={<Useone/>}/>
        <Route path='/countertwo' element={<CounterFour/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured-products' element={<FeaturedProducts/>}/>
          <Route path='new-products' element={<NewProducts/>}/>
        </Route>
        <Route path='/confirmed' element={<OrderConfirmed/>}/>
        <Route path ='users' element={<Users/>}>
          <Route path =':userId' element={<UserDetail/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/practise' element={<Hookme/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </AuthProvider>
    </>
  )
  
}

export default App;
