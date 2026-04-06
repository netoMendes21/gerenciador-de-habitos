import Image from "next/image";

export const DayState = ({ day }: { day: boolean | undefined }) => {
  let image: [string, string, number?] = ["/images/circle.svg", "circle", 12];

  if (day === true) image = ["/images/check.svg", "feito", 20];
  if (day === false) image = ["/images/filed.svg", "falhou", 20];

  const [src, alt, size] = image;
  return (
    <div className="flex items-center justify-center h-9">
      <Image
        src={src}
        width={size}
        height={size}
        alt={alt}
      />
    </div>
  );
};
