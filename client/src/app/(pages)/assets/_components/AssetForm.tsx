import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { DatePicker } from "@/components/datepicker";

const AssetForm = () => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="assetBarcode">Asset Barcode</Label>
          <Input id="assetBarcode" placeholder="Enter barcode" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Input id="status" placeholder="Active" />
        </div>

        <div className="space-y-2 mb-6">
          <Label htmlFor="filterInstalled">Filter Installed on</Label>
          <div className="relative w-full">
            <div className="relative w-full [&>div>button]:w-full [&>div>button]:justify-start [&>div>button]:bg-white [&>div>button]:h-10">
              <DatePicker id="filterInstalled" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="assetType">Asset Type</Label>
          <Input id="assetType" placeholder="RXP - RXP Shower" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primaryIdentifier">Primary Identifier</Label>
          <Input
            id="primaryIdentifier"
            placeholder="Enter primary identifier"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="secondaryIdentifier">Secondary Identifier</Label>
          <Input
            id="secondaryIdentifier"
            placeholder="Enter secondary identifier"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="wing">Wing</Label>
          <Input id="wing" placeholder="Enter wing" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="wingShort">Wing in Short</Label>
          <Input id="wingShort" placeholder="Enter wing short form" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="filterType">Filter Type</Label>
          <Input id="filterType" placeholder="Enter filter type" />
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="filtersOn">Filters On</Label>
          <Select>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="filtersNeeded">Filters Needed</Label>
          <Select>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 mb-6">
          <Label htmlFor="filtersExpiry">Filters Expiry Date</Label>
          <DatePicker id="filtersExpiry" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="roomName">Room Name</Label>
          <Input id="roomName" placeholder="Enter room name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="room">Room</Label>
          <Input id="room" placeholder="Enter room" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="floor">Floor</Label>
          <Input id="floor" placeholder="Enter floor" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="floorWords">Floor in Words</Label>
          <Input id="floorWords" placeholder="Enter floor in words" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="roomNo">Room No</Label>
          <Input id="roomNo" placeholder="Enter room number" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="patientStaffArea">Patient / Staff Area</Label>
          <Input id="patientStaffArea" placeholder="Enter area type" />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-6">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" className="bg-[#071487]">
          Save Asset
        </Button>
      </div>
    </form>
  );
};

export default AssetForm;
