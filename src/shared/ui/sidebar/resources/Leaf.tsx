const Leaf = ({ color = '#000000' }) => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M15 9L3.75 20.25'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M6.00003 18C1.50003 10.5 7.50003 3 20.25 3.75C21 16.5 13.5 22.5 6.00003 18Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default Leaf;
