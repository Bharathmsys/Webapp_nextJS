import React from 'react'
import Image from "next/image";
import datascience from '../public/data science.png'
import { useRouter } from 'next/router';
const First_page = () => {
    const router = useRouter()
    const contactbutton = ()=>{
        router.push('/Contact')
    }
    const datascienceHandler = ()=>{
        router.push('/Datascience')
    }
    const dataengineerHandler = ()=>{
        router.push('/DataEngineer')
    }
    const machinelearningHandler = ()=>{
        router.push('/MachineLearning')
    }
  return (
    <div className='img' data-testid='contactbutton'>
      <div>
      <button className='a'></button>
       <h4 className='title'>World's Leading Machine<br/> Learning Company</h4>
      <p className='des'>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry.Lorem Ipsum has been the industry's standard dummy text<br/> ever since the 1500s, when an unknown printer took a galley of type <br/>  and scrambled it to make a type specimen book. It has survived not <br/>  only five centuries, but also the leap into electronic typesetting, <br/> remaining essentially unchanged.</p>
     <button className='button'>Learn More</button>
        <button className='button' onClick={contactbutton}  >Contact Us</button>
      </div>
      <div className='container-2'>
      <div className='con-2'onClick={datascienceHandler} >
         <Image className='pt-1' src={datascience} width="70"/> 
        <h1 className='name'>Data Science</h1>
        <p className='para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        </p>
      </div>
      <div className='con-2' onClick={dataengineerHandler} >
      <Image className='pt-1' src={datascience} width="70"/> 
        <h1 className='name'>Data Engineer</h1>
        <p className='para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        </p>
      </div>
      <div className='con-2' onClick={machinelearningHandler} >
      <Image className='pt-1' src={datascience} width="70"/>
        <h1 className='name'>Machine Learning</h1>
        <p className='para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        </p>
      </div>
      </div>
    </div>
   
  )
}

export default First_page
