"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";
import { jobsData } from "@/components/data/jobsData";
import Image from "next/image";

// Define the Job type
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  jobType: string;
  posted: string;
  wage: number;
  duration: string;
  experience: string;
  openings: number;
  applyBy: string;
  roles: string[];
  logo?: string;
}

export const JobCard: React.FC = () => {
  // Utility function to format date as "Mon DD, YYYY"
const formatDateShort = (dateStr: string) => {
  const d = new Date(dateStr);
  return `${d.toLocaleString("en-US", { month: "short" })} ${d.getDate()}, ${d.getFullYear()}`;
};
  return (
    <div>
      {jobsData.map((job: Job) => (
        <div
          key={job.id}
          className="relative border border-border my-10 bg-surface-muted px-2.5 py-4 md:p-6 rounded-[0.63rem]"
        >
          <p className="absolute -top-5 -right-[1px] text-sm text-foreground leading-[100%] bg-background border border-border p-2.5 w-fit rounded-s-[0.63rem] rounded-t-[0.63rem]">
            Posted {job.posted}
          </p>

          <div className="space-y-10.5  ">
            {/* Job title and company info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 justify-start items-center gap-2.5 md:gap-12.5">
              {/* Left side: organization info */}
              <div className="col-span-8 md:col-span-5 flex flex-col gap-5">
                <div className="flex items-center gap-4.5">
                  <div className="h-[60px] w-[60px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src={job.logo || "/images/logo/ShramBazarLogo.svg"}
                      alt={`${job.company} logo`}
                      width={60}
                      height={60}
                      className="object-contain h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-foreground">{job.title}</h3>
                    <p className="text-gray-700 ">
                      <span>{job.company}</span>&nbsp;|&nbsp;
                      <span>{job.location}</span>&nbsp;•&nbsp;
                      <span>{job.jobType}</span>
                    </p>
                  </div>
                </div>

                {/* Job roles */}
                <div className="flex flex-wrap gap-3.5">
                  {job.roles.map((role) => (
                    <Badge
                      key={role}
                      variant="secondary"
                      className="rounded-full bg-background text-gray-500 hover:bg-gray-100 border border-[#ebebeb] px-2.5 py-0.5 text-xs font-normal cursor-pointer"
                    >
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Right side: salary, duration, experience */}
              <div className="col-span-7 flex gap-2.5 md:gap-9.5 justify-start">
                <div className="flex flex-col gap-0.5 lg:pr-10">
                  <p className="text-xs leading-[1rem] text-gray-500">Wage</p>
                  <p className="text-base font-medium text-foreground">
                    &#8377;{job.wage.toLocaleString()}/Day
                  </p>
                </div>

                <Separator
                  orientation="vertical"
                  className="border-[1px] border-[#e1e1e1]"
                />

                <div className="flex flex-col gap-0.5 lg:pr-10">
                  <p className="text-xs leading-[1rem] text-gray-500">Duration</p>
                  <p className="text-base font-medium text-foreground">{job.duration}</p>
                </div>

                <Separator
                  orientation="vertical"
                  className="border-[1px] border-[#e1e1e1]"
                />

                <div className="flex flex-col gap-0.5 lg:pr-10">
                  <p className="text-xs leading-[1rem] text-gray-500">Experience</p>
                  <p className="text-base text-center md:text-left font-medium text-foreground">
                    {job.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Openings and Apply section */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-0.5">
                <p className="font-normal text-sm text-gray-700">
                  <span>Openings: </span>
                  {job.openings}
                </p>
                <p className="font-medium text-sm text-foreground">
                  <b>Apply by {formatDateShort(job.applyBy)}</b>
                </p>
              </div>

              <div className="flex md:gap-2.5">
                <Button variant="ghost">View Details</Button>
                <Button>Apply</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
