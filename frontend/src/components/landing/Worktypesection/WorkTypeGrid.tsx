"use client";

import Image from "next/image";

interface WorkType {
  title: string;
  image: string;
}

const workTypes: WorkType[] = [
  { title: "Skilled Workers", image: "/images/WorkTypeImages/Skilled-Workers.webp" },
  { title: "Support Workers", image: "/images/WorkTypeImages/Support-Workers.webp" },
  { title: "Site Workforce", image: "/images/WorkTypeImages/Site-Workforce.webp" },
  { title: "Machinery Staff", image: "/images/WorkTypeImages/Machinery-Staff.webp" },
  { title: "Drivers & Transport", image: "/images/WorkTypeImages/Driver-&-Transport.webp" },
  { title: "Site Support Staff", image: "/images/WorkTypeImages/Site-Support-staff.webp" },
];

export default function WorkTypeGrid() {
  return (
    <section className="bg-neutral-900 text-background py-11">
      <div className="wrapper md:wrapper-md lg-wrapper-lg">
        <h2 className="font-medium mb-6">Choose Your Work Type</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {workTypes.map((work) => (
            <div
              key={work.title}
              className="flex flex-col items-start group cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-32 relative rounded-lg overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover grayscale  transition-all duration-300"
                />
              </div>

              {/* Label */}
              <p className="mt-2 text-base text-background group-hover:text-white text-left">
                {work.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
