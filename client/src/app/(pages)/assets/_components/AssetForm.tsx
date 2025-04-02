import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select } from "./select";

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

        <div className="space-y-2">
          <Label htmlFor="filterInstalled">Filter Installed on</Label>
          <Input id="filterInstalled" type="date" />
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
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="filtersNeeded">Filters Needed</Label>
          <Select>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="filtersExpiry">Filters Expiry Date</Label>
          <Input id="filtersExpiry" type="date" />
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

      {/* Form Actions */}
      <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-6">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Save Asset</Button>
      </div>
    </form>
  );
};

export default AssetForm;
