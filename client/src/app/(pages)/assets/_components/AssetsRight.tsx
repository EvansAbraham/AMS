import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Pen } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input';
import { Select, SelectValue, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DatePicker } from '@/components/datepicker'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Textarea } from '@/components/ui/textarea'


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const AssetsRight = () => {
  return (
    <div className='bg-gray-50 flex-grow hidden sm:flex flex-col h-screen p-6'>
      {/* Title and it's buttons */}
      <div className='flex justify-between items-start w-full'>
        <div>
          <p className='text-md'>Barcode</p>
          <p className='text-2xl font-bold'>C30001</p>
        </div>
        <div className='flex gap-2 my-2'>
          <Button variant={"custom"}>Submit</Button>
          <Button variant={"outline"}><Pen/> Edit</Button>
        </div>
      </div>
      {/* Switch Button */}
      <div className='flex gap-3'>
        <Label htmlFor='changeOrInstall' className='text-[#071487]'>Change / Install</Label>
        <Switch id='changeOrInstall'/>
      </div>
      {/* Things to add */}
      {/* Once the toggle is enabled reason should be asked and then the date fields should be enabled
       */}
       {/* Change filter date */}
      {/* Fields and Content */}
      <ScrollArea className='h-[calc(100vh-100px)] w-full overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
            <div className='py-2'>
              <Label htmlFor='assetBarcode'>Asset Barcode<Button variant={"transparent"} className='h-3 w-3 border-0 hidden md:flex items-center justify-center'><Pen/></Button></Label>
              <Input id='assetBarcode' placeholder='Asset Barcode' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='filterOn'>Filter On</Label>
              <Select>
                <SelectTrigger className="w-sm bg-white my-2">
                  <SelectValue placeholder="Choose an Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='py-2'>
              <Label htmlFor='status'>Status</Label>
              <Select>
                <SelectTrigger className="w-sm bg-white my-2">
                  <SelectValue placeholder="Choose an Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='py-2'>
              <Label htmlFor='status'>Filter Needed</Label>
              <Select>
                <SelectTrigger className="w-sm bg-white my-2">
                  <SelectValue placeholder="Choose an Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='py-2'>
              <Label htmlFor='FilterInstallationDate'>Filter Installation Date</Label>
              <DatePicker id='FilterInstallationDate'/>
            </div>
            <div className='py-2' >
              <Label htmlFor='FilterExpireDate' className='text-[#071487]'>Filter Expiry Date</Label>
              <Input id='FilterExpireDate' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='assetType'>Asset Type</Label>
              <Input id='assetType' placeholder='Asset Type' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='roomName'>Room Name</Label>
              <Input id='roomName' placeholder='Room Name' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='primaryIdentifier'>Primary Identifier</Label>
              <Input id='primaryIdentifier' placeholder='Primary Identifier' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='secondaryIdentifier'>Secondary Identifier</Label>
              <Input id='secondaryIdentifier' placeholder='Secondary Identifier' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='wingInShort'>Wing in Short</Label>
              <Select>
                <SelectTrigger className="w-sm bg-white my-2">
                  <SelectValue placeholder="Select a Wing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="yes">Wing A</SelectItem>
                    <SelectItem value="no">Wing B</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='py-2'>
              <Label htmlFor='Floor'>Floor</Label>
              <Select>
                <SelectTrigger className="w-sm bg-white my-2">
                  <SelectValue placeholder="Select a Floor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="yes">Floor A</SelectItem>
                    <SelectItem value="no">Floor B</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='py-2'>
              <Label htmlFor='room'>Room</Label>
              <Input id='room' placeholder='Room' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='roomNo'>Room No</Label>
              <Input id='roomNo' placeholder='Room No' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='filterType'>Filter Type</Label>
              <Input id='filterType' placeholder='Filter Type' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='patientStaffArea'>Patient / Staff Area</Label>
              <Input id='patientStaffArea' placeholder='Patient / Staff Area' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='augmentedCare'>Augmented Care</Label>
              <Input id='augmentedCare' placeholder='Augmented Care' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='filterMake'>Filter Make</Label>
              <Input id='filterMake' placeholder='Filter Make' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='attachments'>Attachments</Label>
              <Input id='attachments' type='file' className='bg-white my-2 w-sm'/>
            </div>
            <div className='py-2'>
              <Label htmlFor='riskAssessment' className='text-[#071487]'>Risk Assessment WO</Label>
              <Accordion type='single' collapsible className="bg-white h-9 rounded-sm border border-gray-200 shadow-xs my-2 text-sm w-sm">
                <AccordionItem value='table'>
                  <AccordionTrigger className='p-2'>Click to view the Logs</AccordionTrigger>
                  <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                          <TableCell className="font-medium">{invoice.invoice}</TableCell>
                          <TableCell>{invoice.paymentStatus}</TableCell>
                          <TableCell>{invoice.paymentMethod}</TableCell>
                          <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className='py-2'>
              <Label htmlFor='notes'>Notes</Label>
              <Textarea className='bg-white my-2 w-sm'/>
            </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export default AssetsRight