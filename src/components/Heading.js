import clsx from 'clsx';

export function Heading({
  as: Comp = 'h1',
  size = '6xl',
  children,
  className,
}) {
  return (
    <Comp
      className={clsx(
        'font-semibold tracking-tighter',
        size === '8xl' && 'text-5xl md:text-[5rem]',
        size === '6xl' && 'text-4xl md:text-[3rem] lg:text-[5rem] leading-none',
        size === '2xl' && 'text-2xl',
        className
      )}
    >
      {children}
    </Comp>
  );
}
