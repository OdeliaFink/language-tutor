import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import * as prismic from '@prismicio/client';

import { Bounded } from '@/components/Bounded';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';

const Hero = ({ slice }) => {
  return (
    <section as="section" collapsible={false} className="bg-white pb-0 md:pb-0">
      <div className="grid grid-cols-1 justify-items-center gap-10">
        <div className="w-full">
          <PrismicNextImage
            field={slice.primary.image}
            sizes="100vw"
            className="w-full object-cover max-h-screen lg:h-[50rem] h-[38rem]"
          />
        </div>
        <div className="max-w-2xl text-center leading-none absolute md:w-[80%] lg:top-[7rem] md:top-[5rem] top-[7rem]">
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading1: ({ children }) => (
                <Heading className="mb-6 last:mb-0">{children}</Heading>
              ),
              paragraph: ({ children }) => (
                <p className="mb-6 last:mb-0">{children}</p>
              ),
            }}
          />
        </div>
        {prismic.isFilled.link(slice.primary.buttonLink) &&
          prismic.isFilled.keyText(slice.primary.buttonText) && (
            <PrismicNextLink
              field={slice.primary.buttonLink}
              className="rounded bg-slate-800 px-7 py-3 font-bold text-white"
            >
              {slice.primary.buttonText}
            </PrismicNextLink>
          )}
      </div>
    </section>
  );
};

export default Hero;
