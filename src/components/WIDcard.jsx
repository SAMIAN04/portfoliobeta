
import PropTypes from 'prop-types';

function WIDcard({Icon, title, description}) {
  return (
 <div className="w-full flex flex-col items-center text-center hover:shadow-xl  border border-[#2e3830] backdrop-blur-xl bg-[#cefffa0d]  p-4 rounded-[10px] min-h-36   transition-transform duration-300">
      <Icon className="w-10 h-10 text-green-400 mb-2" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>  )
}

WIDcard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WIDcard