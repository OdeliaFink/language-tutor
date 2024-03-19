import { PrismicText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';
// import logo from '../icons/purple-logo.png';
import ig from '../icons/iglogo.png';
import { Bounded } from './Bounded';
import { Heading } from './Heading';
import { PrismicRichText } from './PrismicRichText';
import logo from '../icons/logo.png';

export function Footer({ settings }) {
  return (
    <section className="bg-[#B7C8B5] pb-8 pt-5 px-6">
      <div className="flex flex-row justify-between items-center">
        <div>
          <img src={logo.src} className="w-[10rem] pb-4" />
          <div className="max-w-[40%]">
            {/* <p className="">
              In-person walking classes where students learn conversational
              English.
            </p> */}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="font-bold text-1xl">Contact</h4>
          <p>E: info@walkinenglish.com</p>
          <p>P: 90-542-851-9258 </p>
          <p>North Cyprus</p>
        </div>
      </div>
      <div className="flex justify-center">
        <h1>© 2024 Walk in English</h1>
      </div>
    </section>
  );
}
