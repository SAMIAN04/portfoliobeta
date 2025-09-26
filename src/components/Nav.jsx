import PropTypes from 'prop-types';

function Nav({ activeItem, onItemClick }) {
  return (
    <nav
      className="h-[57.6px] w-[99vw] flex justify-center items-center bg-[#2b2b2cbf] fixed bottom-0 z-0 backdrop-blur-xl rounded-tr-3xl rounded-tl-3xl border-[1px] border-[#383838]
     lg:w-[700px] lg:mb-2"
    >
      <div>
        <ol className="flex gap-8 text-[13px] lg:gap-14">
          {['About', 'Skills', 'Goals', 'Projects', 'Resume'].map((item) => (
            <li
              key={item}
              onClick={() => onItemClick(item)}
              className={`cursor-pointer transition-transform duration-300 ${
                activeItem === item
                  ? 'text-[#72fcc2fb] font-semibold lg:text-lg text-[15px] lg:translate-y-[-6px] translate-y-[-3px]' // active item always scaled & lifted
                  : 'text-gray-400'
              } hover:scale-105 hover:text-[#72fcc2fb]`}
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  activeItem: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Nav;
