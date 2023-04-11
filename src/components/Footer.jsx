import React from 'react';



const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer p-10 bg-black text-white">
                    <div>
                        <img className='w-[100px]' src='/src/assets/All Images/md-nizamuddin (1).jpeg' alt='Nizam' />
                        <p className='text-left text-2xl'>Assignment 09.<br />Submitted by Md Nizam Uddin</p>
                        <p>Batch 07</p>
                    </div>
                    <div>
                        <span className="footer-title">My Projects</span>
                        <a className="link link-hover" href='https://ema-john-shop-byreact.netlify.app/'>EmaJohn Shop</a>
                        <a className="link link-hover" href='https://t-shirts-store-react.netlify.app/'>T-Shirt Store</a>
                        <a className="link link-hover" href='https://book-cafe-react.netlify.app/'>Book Cafe</a>
                        <a className="link link-hover" href='https://myshoppingcart2.netlify.app/'>My Shopping Cart</a>
                    </div>
                    <div>
                        <span className="footer-title">Milstone</span>
                        <a className="link link-hover" href='https://freelancernizamc.github.io/milstone-01/'>Milstone 01</a>
                        <a className="link link-hover" href='https://milstone-2.netlify.app/'>Milstone 02</a>
                        <a className="link link-hover" href='https://freelancernizamc.github.io/milstone-03/index.html'>Milstone 03</a>
                        <a className="link link-hover" href='https://freelancernizamc.github.io/milstone-04/'>Milstone 04</a>
                    </div>
                    <div>
                        <span className="footer-title">Assignment</span>
                        <a className="link link-hover" href='https://freelancernizamc.github.io/assignment-1/'>Assignment 01</a>
                        <a className="link link-hover" href='https://freelancernizamc.github.io/assignment-2/'>Assignment 02</a>
                        <a className="link link-hover" href='https://assignment-03-bynizam.netlify.app/'>Assignment 03</a>
                        <a className="link link-hover" href='https://assignment-5by-nizam.netlify.app/'>Assignment 05</a>
                    </div>
                </footer>
            </div>
            <h5 className='text-center'>Copyright &copy;2023 Allright Reserved</h5>
        </div>
    );
};

export default Footer;