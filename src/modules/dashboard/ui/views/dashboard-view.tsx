import { ChartsSection } from "../sections/charts-section";
import { StatisticsSection } from "../sections/statistics-section";
import { TravelSection } from "../sections/travel-section";
import { CitySetsSection } from "../sections/city-sets-section";

export const DashboardView = () => {
  return (
    <div className="flex flex-col gap-y-4 py-2.5 px-4 max-w-7xl mx-auto">
      <StatisticsSection />
      <ChartsSection />
      
      {/* Add a title for the City Sets section */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">City Collections</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Manage your city collections and their descriptions
        </p>
        <CitySetsSection />
      </div>
      
      <TravelSection />
    </div>
  );
};
