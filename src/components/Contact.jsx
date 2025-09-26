import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faCakeCandles, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className='flex items-center flex-col'>
      <div className='flex w-[80%] justify-start ml-[-10px] md:justify-center md:ml-0'>
        <ul className="text-white ">
          {/* Email */}
          <li className='flex flex-row gap-4 items-center py-4 pr-12 pl-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(151,194,169,0.3)] md:py-4 md:pr-4 md:pl-4'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl bg-[#8181814d] p-3 rounded-xl text-[#97c2a9]
              border-[1px] border-[#b3cebe23] shadow-xl"
            />
            <span className="flex items-start flex-col">
              <label className='text-[#72fcc2fb] font-bold mb-[-4px]'>Email</label>
              <a href="mailto:samiansikdar04@gmail.com" className='text-white hover:underline text-sm'>
                samiansikdar04@gmail.com
              </a>
            </span>
          </li>

          {/* Phone */}
          <li className='flex flex-row gap-4 items-center p-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(151,194,169,0.3)]'>
            <FontAwesomeIcon
              icon={faPhone}
              className="text-2xl bg-[#8181814d] p-3 rounded-xl text-[#97c2a9]
              border-[1px] border-[#b3cebe23] shadow-xl"
            />
            <span className="flex items-start flex-col">
              <label className='text-[#72fcc2fb] font-bold mb-[-4px]'>Phone</label>
              <a href="tel:+8801329453669" className='text-white hover:underline text-sm'>
                +8801329483669
              </a>
            </span>
          </li>

          {/* Birthday */}
          <li className='flex flex-row gap-4 items-center p-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(151,194,169,0.3)]'>
            <FontAwesomeIcon
              icon={faCakeCandles}
              className="text-2xl bg-[#8181814d] p-3 rounded-xl text-[#97c2a9]
              border-[1px] border-[#b3cebe23] shadow-xl"
            />
            <span className="flex items-start flex-col">
              <label className='text-[#72fcc2fb] font-bold mb-[-4px]'>Birthday</label>
              <p className='text-white text-sm'>November 01, 2005</p>
            </span>
          </li>

          {/* Location */}
          <li className='flex flex-row gap-4 items-center p-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(151,194,169,0.3)]'>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-2xl bg-[#8181814d] p-3 rounded-xl text-[#97c2a9]
              border-[1px] border-[#b3cebe23] shadow-xl"
            />
            <span className="flex items-start flex-col">
              <label className='text-[#72fcc2fb] font-bold mb-[-4px]'>Location</label>
              <p className='text-white text-sm'>Dhaka, Bangladesh</p>
            </span>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className='flex flex-row w-[80%] gap-5 items-center justify-center mt-5'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-1xl bg-[#8181814d] p-3 rounded-xl text-[#97c2a9]
            border-[1px] border-[#b3cebe23] shadow-xl
            hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(151,194,169,0.6)]
            transition-all duration-300"
          />
        </a>

        <a href="https://www.linkedin.com/in/samian-sikdar" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="  text-xl bg-[#8181814d] p-3 rounded-xl text-[#97c2a9]
            border-[1px] border-[#b3cebe23] shadow-xl
            hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(151,194,169,0.6)]
            transition-all duration-300"
          />
        </a>

        <a href="https://github.com/SAMIAN04" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-1xl bg-[#8181814d] p-3 rounded-xl text-[#97c2a9]
            border-[1px] border-[#b3cebe23] shadow-xl
            hover:scale-110 hover:shadow-[0_0_15px_4px_rgba(151,194,169,0.6)]
            transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
