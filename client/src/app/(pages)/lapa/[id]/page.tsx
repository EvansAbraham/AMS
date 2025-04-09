"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
import { Textarea } from "@/components/ui/textarea";

export default function LapaDetailsPage() {
  const router = useRouter();
  
  const handleBackClick = () => {

    if (window.innerWidth < 640) { 
      router.push("/lapa");
    }
  };
  
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen p-4 pt-16 sm:hidden">
      <div className="flex justify-between items-start w-full mb-4">
        <div>
          <p className="text-sm text-gray-500">WO No.</p>
          <p className="text-xl font-bold">661642</p>
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

      <ScrollArea className="flex-grow">
        <div className="space-y-4 max-w-md mx-auto w-full">
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

          <div className="flex flex-col">
            <Label htmlFor="temperatureHot" className="text-sm text-center">
              Temperature (Hot)
            </Label>
            <Input
              id="temperatureHot"
              placeholder="Temperature (Hot)"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="certificateNo" className="text-sm text-center">
              Certificate No
            </Label>
            <Input
              id="certificateNo"
              placeholder="Certificate No"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="temperatureCold" className="text-sm text-center">
              Temperature (Cold)
            </Label>
            <Input
              id="temperatureCold"
              placeholder="Temperature (Cold)"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="riskAssessmentWONo" className="text-sm text-center">
              Risk Assessment WO No.
            </Label>
            <Input
              id="riskAssessmentWONo"
              placeholder="Risk Assessment WO No."
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="laPA" className="text-sm text-center">
              LA/PA
            </Label>
            <Select>
              <SelectTrigger className="w-full bg-white mt-1">
                <SelectValue placeholder="Choose an Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="la">LA</SelectItem>
                  <SelectItem value="pa">PA</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="riskAssessmentWODate"
              className="text-sm text-center"
            >
              Risk Assessment WO Date
            </Label>
            <div className="mt-1">
              <DatePicker id="riskAssessmentWODate" />
            </div>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="sample" className="text-sm text-center">
              Sample (Original or Resample)
            </Label>
            <Input
              id="sample"
              placeholder="Original/Resample"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="remedialWONo" className="text-sm text-center">
              Remedial WO No.
            </Label>
            <Input
              id="remedialWONo"
              placeholder="Remedial WO No."
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="resultPre" className="text-sm text-center">
              Result (Pre)
            </Label>
            <Input
              id="resultPre"
              placeholder="Result (Pre)"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="remedialCompletedOn"
              className="text-sm text-center"
            >
              Remedial Completed On
            </Label>
            <div className="mt-1">
              <DatePicker id="remedialCompletedOn" />
            </div>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="resultPost" className="text-sm text-center">
              Result (Post)
            </Label>
            <Input
              id="resultPost"
              placeholder="Result (Post)"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="sampleNoPre" className="text-sm text-center">
              Sample No (Pre)
            </Label>
            <Input
              id="sampleNoPre"
              placeholder="Sample No (Pre)"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="sampleOn" className="text-sm text-center">
              Sample On
            </Label>
            <div className="mt-1">
              <DatePicker id="sampleOn" />
            </div>
          </div>

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

          <div className="flex flex-col">
            <Label htmlFor="location" className="text-sm text-center">
              Location
            </Label>
            <Input
              id="location"
              placeholder="Location"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="labName" className="text-sm text-center">
              Lab Name
            </Label>
            <Input
              id="labName"
              placeholder="Lab Name"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="bacteriaVariant" className="text-sm text-center">
              Bacteria Variant
            </Label>
            <Input
              id="bacteriaVariant"
              placeholder="Bacteria Variant"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="receivedOn" className="text-sm text-center">
              Received On
            </Label>
            <div className="mt-1">
              <DatePicker id="receivedOn" />
            </div>
          </div>

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

          <div className="flex flex-col">
            <Label htmlFor="filterDetails" className="text-sm text-center">
              Filter Details
            </Label>
            <Textarea
              id="filterDetails"
              placeholder="Filter Details"
              className="bg-white mt-1 w-full"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="comments" className="text-sm text-center">
              Comments
            </Label>
            <Textarea
              id="comments"
              placeholder="Comments"
              className="bg-white mt-1 w-full"
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
