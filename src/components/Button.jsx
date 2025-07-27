import React from 'react'

const Button = ({text,className,id}) => {

   const handleClick = (e) => {
      e.preventDefault();
      const target = document.getElementById('counter');

      if(target && id){
        const offset = window.innerHeight * 0.15; // 10% of the viewport height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
  
   } 
  return (
    <a onClick={(e) => handleClick(e)} href="" className={`${className ?? ''} cta-wrapper`}>
        <div className='cta-button group'>
            <div className='bg-circle'></div>
            <p className='text'>{text}</p>
            <div className='arrow-wrapper'>
                <img src="/public/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button
