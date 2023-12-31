'use client'
import DataTable from '@/components/DataTable'
import { columns } from '@/components/DataTable/columns'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { data } from '@/mock-data/MOCK_DATA'

export default function Home() {
  return (
    <main>

      <div className='py-6 px-8 flex justify-between items-center'>
        <div className='flex items-center gap-1'>
          <svg className='cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" />
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E6EBF3" />
            <path d="M22.666 16H9.33268M9.33268 16L14.3327 21M9.33268 16L14.3327 11" stroke="#191C20" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.666 16H9.33268M9.33268 16L14.3327 21M9.33268 16L14.3327 11" stroke="black" stroke-opacity="0.2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.666 16H9.33268M9.33268 16L14.3327 21M9.33268 16L14.3327 11" stroke="black" stroke-opacity="0.2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.666 16H9.33268M9.33268 16L14.3327 21M9.33268 16L14.3327 11" stroke="black" stroke-opacity="0.2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.666 16H9.33268M9.33268 16L14.3327 21M9.33268 16L14.3327 11" stroke="black" stroke-opacity="0.2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.666 16H9.33268M9.33268 16L14.3327 21M9.33268 16L14.3327 11" stroke="black" stroke-opacity="0.2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.666 16H9.33268M9.33268 16L14.3327 21M9.33268 16L14.3327 11" stroke="black" stroke-opacity="0.2" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className='text-black font-medium'>Trips:</span>
          <span className='text-muted-foreground'>16 Oct, 2023</span>
        </div>
        <div className='flex gap-4'>
          <Select>
            <SelectTrigger className="w-[149px]">
              <SelectValue placeholder="Driver" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="driver">Driver</SelectItem>
                <SelectItem value="banana">Pilot</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[149px]">
              <SelectValue placeholder="Admin" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[149px]">
              <SelectValue placeholder="Driver" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="driver">Driver</SelectItem>
                <SelectItem value="banana">Pilot</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DataTable data={data} columns={columns} />

    </main>
  )
}
