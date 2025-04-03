import { IconChevronDown } from '@tabler/icons-react'
import React from 'react'

function Category() {
  return (
    <div
    className="status justify-center flex flex-col
    px-2"
  >
    <span className="label font-medium cursor-pointer">Category</span>
    <span className="cursor-pointer filter-value grid">
      <span className="value">All</span>
      <IconChevronDown />
    </span>
  </div>
  )
}

export default Category