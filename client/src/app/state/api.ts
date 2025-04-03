import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface Asset {
    id: string;
    assetBarcode?: string;
    barcodeImageUrl?: string;
    status?: string;
    assetType?: string;
    primaryId?: string;
    secondaryId?: string;
    wingInShort?: string;
    room?: string;
    floorInWords?: string;
    roomName?: string;
    notes?: string;
    filterNeeded?: string;
    filterOn?: string;
    filterInstalledOn?: string;
    filterExpiryDate?: string;
    augmentedCare?: string;
}

export interface NewAsset {
    id: string;
    assetBarcode: string;
    barcodeImageUrl: string;
    status: string;
    assetType: string;
    primaryId: string;
    secondaryId: string;
    wingInShort: string;
    room: string;
    floorInWords: string;
    roomName: string;
    notes: string;
    filterNeeded: string;
    filterOn: string;
    filterInstalledOn: string;
    filterExpiryDate: string;
    augmentedCare: string;
}


export interface Lapa {
    assetBarcode: string;
    status?: string;
    wing?: string;
    location?: string;
    riskAssessmentWoNo?: string;
    room?: string;
    labName?: string;
    lApA?: string;
    sample?: string;
    certificateNo?: string;
    bacteriaVariant?: string;
    resultPre?: string;
    resultPost?: string;
    reportTemplate?: string;
    sampleOn?: string;
    nextSampleDate?: string;
    notifiedOn?: string;
    temperatureHot?: string;
    temperatureCold?: string;
    remedialWoNo?: string;
    remedialCompletedOn?: string;
    comments?: string;
    processNo?: string;
    systemContamination?: string;
    systemContaminationScore?: string;
    managedMitigation?: string;
    managedMitigationScore?: string;
    overallRiskScore?: string;
    assessedRisk?: string;
    additionalComments?: string;
    agreedActions?: string;
    raCompletedBy?: string;
    remedialActions?: string;
    remedialCompletedBy?: string;
    raCompletedOn?: string;
    remedialDoneOn?: string;
}

export interface UpdateLapa {
    status?: string;
    wing?: string;
    location?: string;
    riskAssessmentWoNo?: string;
    room?: string;
    labName?: string;
    lApA?: string;
    sample?: string;
    certificateNo?: string;
    bacteriaVariant?: string;
    resultPre?: string;
    resultPost?: string;
    reportTemplate?: string;
    nextSampleDate?: string;
    comments?: string;
    overallRiskScore?: string;
    assessedRisk?: string;
    agreedActions?: string;
}

export interface Wing {
    wingInShort: string;
}
export interface Floor {
    id: string;
    wingInShort: string;
    floorName: string;
}

export const api = createApi({
    
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: [ "Assets", "Wings", "Floors", "LAPAS" ],
    endpoints:(build) => ({
        getAssets: build.query<Asset[], string | void>({
            query: (search) =>({
                url: "/assets",
                params: search ? { search } : {},
            }),
            providesTags: ["Assets"],
        }),

        getAssetById: build.query<Asset, string>({
            query: (id) => ({
              url: `/assets/${id}`,
            }),
            providesTags: ["Assets"]
          }),

        createAsset: build.mutation<Asset, NewAsset>({
            query: (newAsset) => ({
              url: "/assets",
              method: "POST",
              body: newAsset,
            }),
            invalidatesTags: ["Assets"],
          }),

          updateAsset: build.mutation<Asset, Partial<Asset>>({
            
            query: (updatedAsset) => ({
                url: `/assets/${updatedAsset.id}`,
                method: "PATCH",
                body: updatedAsset,
            }),
            invalidatesTags: ["Assets"],
        }),

        getAssetByWing: build.query<Asset[], string>({
            query: (wingId) => ({
                url: "/assets",
                params: { wing_in_short: wingId },
            }),
            providesTags: ["Assets"]
        }),

        getAssetByFloor: build.query<Asset[], string>({
            query: (floorId) => ({
                url: "/assets",
                params: { floor_id:floorId }
            }),
            providesTags: ["Assets"]
        }),

        getAssetsByWingAndFloor: build.query<Asset[], { wing_in_short?: string, floor_id?: string }>({
            query: ({ wing_in_short, floor_id }) => ({
              url: "/assets",
              params: { wing_in_short, floor_id },
            }),
            providesTags: ["Assets"],
          }),

          getAssetsByStatus: build.query<Asset[], string>({
            query: (status) => ({
                url: "/assets",
                params: { status },
            }),
            providesTags: ["Assets"],
        }),

        getWings: build.query<Wing[], void>({
            query: () => ({
                url: "/wings",
            }),
            providesTags: ["Wings"],
        }),

        getFloors: build.query<Floor[], string>({
            query: (wingInShort) => ({
                url: `/floors/${wingInShort}`,
            }),
            providesTags: ["Floors"],
        }),

        getLapa: build.query<Lapa[], string | void>({
            query: (search) => ({
                url: "/lapa",
                params: search ? { search } : {},
            }),
            providesTags: ["LAPAS"],
        }),

        getLapaByBarcode: build.query<Asset, string>({
            query: (assetBarcode) => ({
                url: `/lapa/${assetBarcode}`,
              }),
              providesTags: ["LAPAS"]
        }),

        updateLapa: build.mutation<Lapa, { assetBarcode: string; updatedData: UpdateLapa }>({
            query: ({ assetBarcode, updatedData }) => ({
                url: `/lapa/update-lapa/${assetBarcode}`,
                method: "PATCH",
                body: updatedData,
            }),
            invalidatesTags: ["LAPAS"],
        }),

    }),
});

export const {
    useGetAssetsQuery,
    useGetAssetByIdQuery,
    useCreateAssetMutation,
    useUpdateAssetMutation,
    useGetAssetsByWingAndFloorQuery,
    useGetAssetByWingQuery,
    useGetAssetByFloorQuery,
    useGetAssetsByStatusQuery,
    useGetWingsQuery,
    useGetFloorsQuery,
    useGetLapaQuery,
    useGetLapaByBarcodeQuery,
    useUpdateLapaMutation,
} = api;