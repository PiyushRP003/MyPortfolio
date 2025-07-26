import React from 'react'

const Button = ({text,className,id}) => {

   const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        }
   } 
  return (
    <a onClick={() => handleClick(e)} href="" className={`${className ?? ''} cta-wrapper`}>
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
