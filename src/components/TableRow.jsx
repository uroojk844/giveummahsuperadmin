import React from 'react'

const TableRow = ({ data }) => {
    console.log(data)
  return (
    <div className="grid grid-cols-3 bg-white border-t">
          <div className="p-4 border-r">{data.first_name} {data.last_name}</div>
      <div className="p-4 border-r">{data.email}</div>
          <div className="p-4 border-r">{data.phone_number}</div>
    </div>
  );
}

export default TableRow