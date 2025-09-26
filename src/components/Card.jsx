import {} from 'react';

// eslint-disable-next-line react/prop-types
function Card({ children }) {
  return (
    <div className="backdrop-blur-xl min-h-[200px] max-h-[400px] h-fit min-w-[300px] max-w-[1910px] w-[90%] rounded-2xl border-[1px] border-[#383838] shadow-xl flex justify-center items-center bg-[#aaacb16c]  text-ellipsis whitespace-normal overflow-x-hidden  scroll p-3">
      
        {children}
      
    </div>
  );
}

export default Card;
