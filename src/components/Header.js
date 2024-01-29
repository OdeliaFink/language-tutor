'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import * as prismic from '@prismicio/client';
import { PrismicText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { Bounded } from './Bounded';

const localeLabels = {
  'en-us': 'EN',
  'fr-fr': 'FR',
  // '': 'RU',
  // tr: 'TR',
};

export function Header({ locales = [], navigation, settings }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const threshold = 100;

      if (scrollTop > threshold && isVisible) {
        gsap.to('.navbar', {
          opactiy: 0,
          duration: 0.3,
        });
        setIsVisible(false);
      } else if (scrollTop <= threshold && !isVisible) {
        gsap.to('.navbar', { opactiy: 1, duration: 0.6 });
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      className={`bg-transparent z-50 fixed w-full ${isVisible ? 'top-0' : ''}`}
    >
      <section className="w-full left-0 right-0" as="header" yPadding="sm">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
          <nav
            className={`p-4 transition ${
              isVisible ? 'bg-transparent' : 'bg-white shadow-md'
            } w-full`}
          >
            <div className="flex flex-wrap justify-center gap-x-6">
              <ul className="flex flex-wrap gap-6 md:gap-10">
                {navigation.data?.links.map((item) => (
                  <li
                    key={prismic.asText(item.label)}
                    className="font-semibold tracking-tight text-slate-800"
                  >
                    <PrismicNextLink field={item.link}>
                      <PrismicText field={item.label} />
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <span aria-hidden={true}>🌐</span>
                <ul className="flex flex-wrap gap-3">
                  {locales.map((locale) => (
                    <li key={locale.lang} className="first:font-semibold">
                      <PrismicNextLink
                        href={locale.url}
                        locale={locale.lang}
                        aria-label={`Change language to ${locale.lang_name}`}
                      >
                        {localeLabels[locale.lang] || locale.lang}
                      </PrismicNextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
