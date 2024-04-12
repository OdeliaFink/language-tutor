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
        <h2 className="font-semibold text-3xl text-[#746e86]">
          {slice.primary.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className="border border-slate-500 max-w-prose shadow-md rounded"
            style={{ width: '100%' }} // Set width to 100%
          >
            <div className="p-8">
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
