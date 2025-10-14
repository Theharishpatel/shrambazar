import { JobCard } from '@/components/common/jobcard'
import React from 'react'

export const FeatureJobSection = () => {
  return (
    <section className='wrapper mt-20 md:wrapper-md lg:wrapper'>
        <h2 className=" text-foreground">
          Latest Featured Opportunities
        </h2>

        <JobCard />
      </section>
    
  )
}
