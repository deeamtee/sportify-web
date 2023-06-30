const CircleWavyCheck = ({ color = '#000000' }) => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M5.10938 18.8906C4.24688 18.0281 4.81875 16.2187 4.37813 15.1594C3.9375 14.1 2.25 13.1719 2.25 12C2.25 10.8281 3.91875 9.9375 4.37813 8.84063C4.8375 7.74375 4.24688 5.97187 5.10938 5.10938C5.97187 4.24688 7.78125 4.81875 8.84063 4.37813C9.9 3.9375 10.8281 2.25 12 2.25C13.1719 2.25 14.0625 3.91875 15.1594 4.37813C16.2562 4.8375 18.0281 4.24688 18.8906 5.10938C19.7531 5.97187 19.1813 7.78125 19.6219 8.84063C20.0625 9.9 21.75 10.8281 21.75 12C21.75 13.1719 20.0813 14.0625 19.6219 15.1594C19.1625 16.2562 19.7531 18.0281 18.8906 18.8906C18.0281 19.7531 16.2187 19.1813 15.1594 19.6219C14.1 20.0625 13.1719 21.75 12 21.75C10.8281 21.75 9.9375 20.0813 8.84063 19.6219C7.74375 19.1625 5.97187 19.7531 5.10938 18.8906Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M16.125 9.75L10.6219 15L7.875 12.375'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default CircleWavyCheck;
