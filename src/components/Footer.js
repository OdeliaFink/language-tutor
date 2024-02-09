import { PrismicText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';
import logo from '../icons/purple-logo.png';
import ig from '../icons/iglogo.png';
import { Bounded } from './Bounded';
import { Heading } from './Heading';
import { PrismicRichText } from './PrismicRichText';

export function Footer({ settings }) {
  return (
    <section className="bg-gray-800 pb-8 text-slate-300 pt-2 px-6">
      <div className="flex flex-row justify-between">
        <div>
          <img src={logo.src} className="w-[4rem]" />
          <div className="max-w-[40%]">
            <p>
              Walk in English is in-person walking classes where students learn
              conversational English.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <h4 className="font-bold text-1xl">Contact</h4>
          <p>E: info@skooli.com</p>
          <p>P: +1 (844) 475-6654</p>
          <p>Cyprus</p>
        </div>
      </div>
      <div className="flex justify-center">
        <h1>© 2024 Walk in English</h1>
      </div>
    </section>
  );
}
