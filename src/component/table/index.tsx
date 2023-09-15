import { ReactNode } from "react";

interface Props {
  headers: string[];
  children: ReactNode

}

const Table = ({headers, children}: Props) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          {headers.map((header, index) => {
            return (
              <th key={index}>{header}</th>
            )
          })}
            </tr>

      </thead>
      <tbody>
          {children}
      </tbody>
    </table>
  )
}

export default Table