"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Pen, CircleArrowDown } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DatePicker } from "@/components/datepicker";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";

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
];

export default function AssetDetailsPage() {
  const router = useRouter();
  
  const handleBackClick = () => {
   
    if (window.innerWidth < 640) {
      router.push("/assets");
    }
  };
  
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen p-4 pt-16 sm:hidden">
      {/* Title and buttons */}
      <div className="flex justify-between items-start w-full mb-4">
        <div>
          <p className="text-sm text-gray-500">Barcode</p>
          <p className="text-xl font-bold">C30001</p>
        </div>
        <div className="flex gap-2">
          <Button variant={"custom"} size="sm">
            Submit
          </Button>
          <Button variant={"outline"} size="sm">
            <Pen size={16} />
          </Button>
          <Button variant={"ghost"} size="sm" onClick={handleBackClick}>
            <CircleArrowDown size={16} />
          </Button>
        </div>
      </div>

      {/* Switch Button */}
      <div className="flex items-center gap-3 mb-4">
        <Label htmlFor="changeOrInstall" className="text-[#071487] text-sm">
          Change / Install
        </Label>
        <Switch id="changeOrInstall" />
      </div>

      {/* Fields and Content */}
      <ScrollArea className="flex-grow">
        <div className="space-y-4 max-w-md mx-auto w-full">
          {/* Asset Barcode */}
          <div className="flex flex-col">
            <Label htmlFor="assetBarcode" className="text-sm text-center">
              Asset Barcode
            </Label>
            <Input
              id="assetBarcode"
              placeholder="Asset Barcode"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Filter On */}
          <div className="flex flex-col">
            <Label htmlFor="filterOn" className="text-sm text-center">
              Filter On
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white mt-1">
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

          {/* Status */}
          <div className="flex flex-col">
            <Label htmlFor="status" className="text-sm text-center">
              Status
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white mt-1">
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

          {/* Filter Needed */}
          <div className="flex flex-col">
            <Label htmlFor="filterNeeded" className="text-sm text-center">
              Filter Needed
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white mt-1">
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

          {/* Filter Installation Date */}
          <div className="flex flex-col">
            <Label
              htmlFor="FilterInstallationDate"
              className="text-sm text-center"
            >
              Filter Installation Date
            </Label>
            <div className="mt-1">
              <DatePicker id="FilterInstallationDate" />
            </div>
          </div>

          {/* Filter Expiry Date */}
          <div className="flex flex-col">
            <Label
              htmlFor="FilterExpireDate"
              className="text-sm text-[#071487] text-center"
            >
              Filter Expiry Date
            </Label>
            <Input id="FilterExpireDate" className="bg-white mt-1 w-full" />
          </div>

          {/* Asset Type */}
          <div className="flex flex-col">
            <Label htmlFor="assetType" className="text-sm text-center">
              Asset Type
            </Label>
            <Input
              id="assetType"
              placeholder="Asset Type"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Room Name */}
          <div className="flex flex-col">
            <Label htmlFor="roomName" className="text-sm text-center">
              Room Name
            </Label>
            <Input
              id="roomName"
              placeholder="Room Name"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Primary Identifier */}
          <div className="flex flex-col">
            <Label htmlFor="primaryIdentifier" className="text-sm text-center">
              Primary Identifier
            </Label>
            <Input
              id="primaryIdentifier"
              placeholder="Primary Identifier"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Secondary Identifier */}
          <div className="flex flex-col">
            <Label
              htmlFor="secondaryIdentifier"
              className="text-sm text-center"
            >
              Secondary Identifier
            </Label>
            <Input
              id="secondaryIdentifier"
              placeholder="Secondary Identifier"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Wing in Short */}
          <div className="flex flex-col">
            <Label htmlFor="wingInShort" className="text-sm text-center">
              Wing in Short
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white mt-1">
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

          {/* Floor */}
          <div className="flex flex-col">
            <Label htmlFor="Floor" className="text-sm text-center">
              Floor
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white mt-1">
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

          {/* Room */}
          <div className="flex flex-col">
            <Label htmlFor="room" className="text-sm text-center">
              Room
            </Label>
            <Input
              id="room"
              placeholder="Room"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Room No */}
          <div className="flex flex-col">
            <Label htmlFor="roomNo" className="text-sm text-center">
              Room No
            </Label>
            <Input
              id="roomNo"
              placeholder="Room No"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Filter Type */}
          <div className="flex flex-col">
            <Label htmlFor="filterType" className="text-sm text-center">
              Filter Type
            </Label>
            <Input
              id="filterType"
              placeholder="Filter Type"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Patient / Staff Area */}
          <div className="flex flex-col">
            <Label htmlFor="patientStaffArea" className="text-sm text-center">
              Patient / Staff Area
            </Label>
            <Input
              id="patientStaffArea"
              placeholder="Patient / Staff Area"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Augmented Care */}
          <div className="flex flex-col">
            <Label htmlFor="augmentedCare" className="text-sm text-center">
              Augmented Care
            </Label>
            <Input
              id="augmentedCare"
              placeholder="Augmented Care"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Filter Make */}
          <div className="flex flex-col">
            <Label htmlFor="filterMake" className="text-sm text-center">
              Filter Make
            </Label>
            <Input
              id="filterMake"
              placeholder="Filter Make"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Attachments */}
          <div className="flex flex-col">
            <Label htmlFor="attachments" className="text-sm text-center">
              Attachments
            </Label>
            <Input
              id="attachments"
              type="file"
              className="bg-white mt-1 w-full"
            />
          </div>

          {/* Risk Assessment WO */}
          <div className="flex flex-col">
            <Label
              htmlFor="riskAssessment"
              className="text-sm text-[#071487] text-center"
            >
              Risk Assessment WO
            </Label>
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-sm border border-gray-200 shadow-xs mt-1"
            >
              <AccordionItem value="table">
                <AccordionTrigger className="text-sm px-3">
                  Click to view the Logs
                </AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px] text-xs">
                            Invoice
                          </TableHead>
                          <TableHead className="text-xs">Status</TableHead>
                          <TableHead className="text-xs">Method</TableHead>
                          <TableHead className="text-right text-xs w-[100px]">
                            Amount
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoices.map((invoice) => (
                          <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium text-xs">
                              {invoice.invoice}
                            </TableCell>
                            <TableCell className="text-xs">
                              {invoice.paymentStatus}
                            </TableCell>
                            <TableCell className="text-xs">
                              {invoice.paymentMethod}
                            </TableCell>
                            <TableCell className="text-right text-xs">
                              {invoice.totalAmount}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={3} className="text-xs">
                            Total
                          </TableCell>
                          <TableCell className="text-right text-xs">
                            $2,500.00
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Notes */}
          <div className="flex flex-col">
            <Label htmlFor="notes" className="text-sm text-center">
              Notes
            </Label>
            <Textarea className="bg-white mt-1 w-full" />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
