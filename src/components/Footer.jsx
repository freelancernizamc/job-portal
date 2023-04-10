import React from 'react';
import img from '../assets/All Images/nizam.png'


const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer p-10 bg-black text-white">
                    <div>
                        <img className='w-[100px] h-[100px]' src={img} />
                        <p className='text-left'>Assignment 09.<br />Submitted by Md Nizam Uddin</p>
                        <p>Batch 07</p>
                    </div>
                    <div>
                        <span className="footer-title">My Projects</span>
                        <a className="link link-hover">EmaJohn Shop</a>
                        <a className="link link-hover">T-Shirt Store</a>
                        <a className="link link-hover">Book Cafe</a>
                        <a className="link link-hover">My Shopping Cart</a>
                    </div>
                    <div>
                        <span className="footer-title">Milstone</span>
                        <a className="link link-hover">Milstone 01</a>
                        <a className="link link-hover">Milstone 02</a>
                        <a className="link link-hover">Milstone 03</a>
                        <a className="link link-hover">Milstone 04</a>
                    </div>
                    <div>
                        <span className="footer-title">Assignment</span>
                        <a className="link link-hover">Assignment 01</a>
                        <a className="link link-hover">Assignment 02</a>
                        <a className="link link-hover">Assignment 03</a>
                        <a className="link link-hover">Assignment 04</a>
                    </div>
                </footer>
            </div>
            <h5 className='text-center'>Copyright &copy;2023 Allright Reserved</h5>
        </div>
    );
};

export default Footer;