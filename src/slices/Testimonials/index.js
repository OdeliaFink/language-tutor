import { Bounded } from '@/components/Bounded';

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param {TestimonialsProps}
 */
const Testimonials = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-0"
    >
      <div className="flex justify-center pb-5">
        <h2 className="font-semibold text-[3rem] text-[#746e86]">
          {slice.primary.title}
        </h2>
      </div>

      <div className="flex gap-6 lg:flex-row flex-col items-center">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className="flex border border-slate-500 flex  flex-1 text-sm max-w-prose shadow-md  rounded"
          >
            <div className="p-8 gap-2">
              <div className="font-bold">{item.testimonial_title}</div>
              <div className="font-bold">{item.date}</div>
              <div>{item.testimonial_desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Testimonials;
