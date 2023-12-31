'use client'
import DataTable from '@/components/DataTable'
import { columns } from '@/components/DataTable/columns'
import { data } from '@/mock-data/MOCK_DATA'

export default function Home() {
  return (
    <main>

      <DataTable data={data} columns={columns} />

    </main>
  )
}
