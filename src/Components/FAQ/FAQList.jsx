import React from 'react'
import FAQItem from './FAQItem'
import {faqs} from './../../assets/data/faqs'

const FAQList = () => {
  return (
    <ul className = "mt-[38px] ">
        {faqs.map((item,index) => <FAQItem 
        item = {item} key = {index}/>)}
    </ul>
  )
}

export default FAQList;