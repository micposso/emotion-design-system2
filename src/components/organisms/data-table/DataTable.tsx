import React from 'react';
import './DataTable.css';

type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type Props<T extends Record<string, unknown>> = {
  columns: Column<T>[];
  rows: T[];
  caption?: string;
};

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  caption,
}: Props<T>) {
  return (
    <div className="o-data-table__wrapper">
      <table className="o-data-table">
        {caption && <caption className="o-data-table__caption">{caption}</caption>}
        <thead className="o-data-table__head">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="o-data-table__th" scope="col">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="o-data-table__body">
          {rows.map((row, i) => (
            <tr key={i} className="o-data-table__row">
              {columns.map((col) => (
                <td key={String(col.key)} className="o-data-table__td">
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
