import React from 'react'
import ProductCard from './ProductCard'
import {SiArduino} from 'react-icons/si'
export default function ProductSection(props){

  return (
    <>
      <div className="container my-5">
        <h2 className='text-center my-5'>{props.sectionTitle} <SiArduino size={50} color='red'/> </h2>
        <div className="row gap-5">
          <ProductCard brandName="MKR Family" productName="Arduino MKR 1000 WiFi" productType="MKR" />
          <ProductCard brandName="MKR Family" productName="Arduino MKR WiFi 1010"productType="MKR"/>
          <ProductCard brandName="MKR Family"productName="Arduino MKR FOX 1200"productType="MKR"/>
          <ProductCard brandName="MKR Family"productName="Arduino MKR WAN 1300"productType="MKR"/>
          <ProductCard brandName="MKR Family"productName="Arduino MKR WAN 1310"productType="MKR"/>
          <ProductCard brandName="MKR Family"productName="Arduino MKR GSM 1400"productType="MKR"/>
          <ProductCard brandName="MKR Family"productName="Arduino MKR NB 1500"productType="MKR"/>
          <ProductCard brandName="MKR Family"productName="Arduino MKR VIDOR 4000"productType="MKR"/>
        </div>
      </div>
    </>
  )
  }

