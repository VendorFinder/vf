import FAQ from 'react-faq-component';

const data = {
  rows: [
    {
      title: 'How does VendorFinder connect event vendors with people looking to hire them for events?',
      content: 'Answer 1',
    },
    {
      title: 'Are the event vendors on VendorFinder vetted or verified in any way?',
      content: "We have a thorough vetting and verification process in place to ensure that only reputable and professional vendors are listed on our platform. Our team reviews each vendor's profile, verifying their credentials, experience, and any necessary licenses or permits. ",
    },
    {
      title: 'What types of event vendors can I find on VendorFinder?',
      content: 'Answer 2',
    },
    {
      title: 'How can I search for event vendors on VendorFinder?',
      content: 'Answer 2',
    },
    {
      title: 'Is there a fee for using VendorFinder to hire event vendors?',
      content: 'Answer 2',
    },
    // Add more rows as needed
  ],
};
const config = {
  expandIcon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="15" fill="#0C4E8B"/>
  <g clipPath="url(#clip0_447_240)">
  <path d="M20.9166 14.2497H16.7499V10.083C16.7499 9.75149 16.6182 9.43354 16.3838 9.19912C16.1494 8.9647 15.8314 8.83301 15.4999 8.83301C15.1684 8.83301 14.8505 8.9647 14.616 9.19912C14.3816 9.43354 14.2499 9.75149 14.2499 10.083V14.2497H10.0833C9.75173 14.2497 9.43379 14.3814 9.19937 14.6158C8.96495 14.8502 8.83325 15.1682 8.83325 15.4997C8.83325 15.8312 8.96495 16.1491 9.19937 16.3836C9.43379 16.618 9.75173 16.7497 10.0833 16.7497H14.2499V20.9163C14.2499 21.2479 14.3816 21.5658 14.616 21.8002C14.8505 22.0346 15.1684 22.1663 15.4999 22.1663C15.8314 22.1663 16.1494 22.0346 16.3838 21.8002C16.6182 21.5658 16.7499 21.2479 16.7499 20.9163V16.7497H20.9166C21.2481 16.7497 21.566 16.618 21.8005 16.3836C22.0349 16.1491 22.1666 15.8312 22.1666 15.4997C22.1666 15.1682 22.0349 14.8502 21.8005 14.6158C21.566 14.3814 21.2481 14.2497 20.9166 14.2497Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_447_240">
  <rect width="15" height="15" fill="white" transform="translate(8 8)"/>
  </clipPath>
  </defs>
  </svg>,
  collapseIcon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="15" fill="#0C4E8B"/>
  <path d="M9.375 15H20.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
};

export default function Faq() {
  return (
    <FAQ data={data} config={config} />
  )
}