'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar'

const SidebarRight = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="w-[284px] border-x border-x-[#E6EsBF3] flex flex-col box-border">
            {/* header */}
            <div className="border-b border-b-[#E6EsBF3] h-[92px] flex items-center justify-center">
                <h2 className="font-medium text-2xl">Calendar</h2>
            </div>

            {/* calendar */}
            <div style={{ maxHeight: 'calc(100vh - 92px)', overflow: 'hidden' }}>
                <PerfectScrollbar options={{ wheelPropagation: false }}>
                    <div className="pt-[32px] box-border">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="box-border"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[236px]">
                            <Separator className="mt-[32px]" />
                            <Input type="search" placeholder="Search trip..." className="my-[24px]" />

                            <Accordion type="multiple" collapsible='true' defaultValue={['item-1']} className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <span className="font-semibold">Trip Status</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="Completed" value='Completed' />
                                                <label
                                                    htmlFor="Completed"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Completed
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="Upcoming" value='Upcoming' />
                                                <label
                                                    htmlFor="Upcoming"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Upcoming
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="In progress" value='In progress' />
                                                <label
                                                    htmlFor="In progress"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    In progress
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="Canceled" value='Canceled' />
                                                <label
                                                    htmlFor="Canceled"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Canceled
                                                </label>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible='true' className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <span className="font-semibold">Accounts</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        lorem ipsum dollar sit amit!
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        </div>
    )
}

export default SidebarRight;