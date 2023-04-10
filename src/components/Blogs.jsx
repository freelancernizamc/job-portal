import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='h-[400px] text-center bg-[#F9F9FF] flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>Question & Answer Section</h1>

            </div>
            <div>
                <h2 className='text-3xl text-lime-500 font-bold mt-10'>Question 01: When should you use context API?</h2>
                <p className='text-2xl font-bold'>Ans: Context API in React is used in  some scenarios which are as follows:</p>
                <p className='text-2xl font-bold'>1. When we have a global state that needs to be accessed by multiple components.</p>
                <p className='text-2xl font-bold'>2. When we have deeply nested components that need to access data from a parent component without having to pass props down through every level of the component tree</p>
                <p className='text-2xl font-bold mb-2'>3. When we have data that needs to be updated by one component and then accessed by another component that is not a direct parent or child.</p>
                <h2 className='text-3xl text-green-500 font-bold'>Question 02: What is a custom hook?</h2>
                <p className='text-2xl font-bold'>Ans: A custom hook is a reusable function in React that encapsulates common logic that can be shared between components. Custom hooks allow us to extract stateful logic from a component and reuse it across multiple components in our application. They are a way to abstract complex logic and state management away from the components, making them simpler and easier to maintain.</p>
                <h2 className='text-3xl text-blue-700 font-bold mt-2'>Question 03: What is useRef?</h2>
                <p className='text-2xl font-bold'>Ans: useRef is a React hook that allows you to create a mutable reference to an element or a value that persists across re-renders of a component. It returns a JavaScript object with a current property that can be assigned a value or an object, and this value or object can be accessed throughout the lifecycle of the component.</p>
                <h2 className='text-3xl text-green-900 font-bold mt-2'>Question 04: What is useMemo?</h2>
                <p className='text-2xl font-bold'>Ans: useMemo is a React hook that allows you to memoize the result of a function so that it only re-computes the result when the dependencies of the function have changed. It is used to optimize performance by preventing unnecessary re-computations of expensive calculations, especially in cases where the computation is triggered frequently.</p>
            </div>
        </div>
    );
};

export default Blogs;