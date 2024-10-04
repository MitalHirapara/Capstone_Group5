import React from 'react'
import JobFilterHead from '../components/user/JobFilterHead'
import JobBox from '../components/user/JobBox'
import JobSortBar from '../components/user/JobSortBar'

export default function Jobs() {
  return (
    <>
    <JobFilterHead/>
    <JobSortBar/>
    <JobBox/>
    </>
  )
}
