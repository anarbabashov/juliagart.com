"use client";

import { Suspense } from "react";
import { trpc } from "@/trpc/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CitySetDescriptionDialog } from "@/modules/travel/ui/components/city-set-description-dialog";
import { ErrorBoundary } from "react-error-boundary";
import { Skeleton } from "@/components/ui/skeleton";

export const CitySetsSection = () => {
  return (
    <Suspense fallback={<CitySetsTableSkeleton />}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <CitySetsTableContent />
      </ErrorBoundary>
    </Suspense>
  );
};

const CitySetsTableContent = () => {
  const [data] = trpc.photos.getCitySets.useSuspenseQuery({
    limit: 100,
  });

  return (
    <div className="border-y">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">City</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Photos</TableHead>
            <TableHead className="w-[400px]">Description</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.items.map((citySet) => (
            <TableRow key={citySet.id}>
              <TableCell className="font-medium">{citySet.city}</TableCell>
              <TableCell>{citySet.country}</TableCell>
              <TableCell>{citySet.photoCount}</TableCell>
              <TableCell className="text-muted-foreground">
                {citySet.description || "No description"}
              </TableCell>
              <TableCell>
                <CitySetDescriptionDialog
                  citySetId={citySet.id}
                  currentDescription={citySet.description}
                  cityName={citySet.city}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const CitySetsTableSkeleton = () => {
  return (
    <div className="border-y">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">City</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Photos</TableHead>
            <TableHead className="w-[400px]">Description</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className="h-4 w-[150px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[100px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-[50px]" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-8" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}; 