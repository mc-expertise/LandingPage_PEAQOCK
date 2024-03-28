import React from 'react';

const LinkContact = [
  {
    text: ' Imm le Zenith II, Lotissement Attaoufik, Route de Nouacer, Sidi Maarouf, Casablanca, 20640, Maroc ',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.08329 7.7505C9.08329 6.59945 8.1506 5.66675 7.00038 5.66675C5.84932 5.66675 4.91663 6.59945 4.91663 7.7505C4.91663 8.90072 5.84932 9.83342 7.00038 9.83342C8.1506 9.83342 9.08329 8.90072 9.08329 7.7505Z"
          stroke="#127682"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.99959 16.5C6.00086 16.5 0.75 12.2486 0.75 7.80274C0.75 4.3222 3.54758 1.5 6.99959 1.5C10.4516 1.5 13.25 4.3222 13.25 7.80274C13.25 12.2486 7.99832 16.5 6.99959 16.5Z"
          stroke="#127682"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: ' nfo@peaqock.com ',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.9188 7.37598L11.216 10.3868C10.5165 10.9418 9.5322 10.9418 8.83262 10.3868L5.09863 7.37598"
          stroke="#127682"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0907 17.5C16.6251 17.507 18.3333 15.4246 18.3333 12.8653V7.14168C18.3333 4.58235 16.6251 2.5 14.0907 2.5H5.90924C3.37478 2.5 1.66663 4.58235 1.66663 7.14168V12.8653C1.66663 15.4246 3.37478 17.507 5.90924 17.5H14.0907Z"
          stroke="#127682"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },

  {
    text: '+20-2-24564100/1/2/3',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.60982 9.39357C11.9341 12.7169 12.6882 8.87218 14.8047 10.9873C16.8453 13.0272 18.0181 13.4359 15.4327 16.0205C15.1089 16.2808 13.0514 19.4118 5.82054 12.183C-1.41119 4.95325 1.71803 2.89362 1.97835 2.56988C4.56993 -0.0218764 4.97159 1.15774 7.01212 3.19769C9.12868 5.31366 5.28559 6.07026 8.60982 9.39357Z"
          stroke="#127682"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    text: '+20-2-24515201/2',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.60982 9.39357C11.9341 12.7169 12.6882 8.87218 14.8047 10.9873C16.8453 13.0272 18.0181 13.4359 15.4327 16.0205C15.1089 16.2808 13.0514 19.4118 5.82054 12.183C-1.41119 4.95325 1.71803 2.89362 1.97835 2.56988C4.56993 -0.0218764 4.97159 1.15774 7.01212 3.19769C9.12868 5.31366 5.28559 6.07026 8.60982 9.39357Z"
          stroke="#127682"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[#127682] font-bold text-[24px]">Contact Us</h1>

      <p className="text-[#585E66]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
        lectus nunc, sagittis, eros.
      </p>

      <ul className="flex flex-col gap-6">
        {LinkContact.map((link, index) => (
          <li
            key={index}
            className={`flex gap-4 ${
              index === 0 ? 'items-start' : 'items-center'
            }`}>
            {link.icon}
            {link.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUs;
