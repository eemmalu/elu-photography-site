import PortfolioImage from "@/components/portfolioimg";

export default function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row py-[calc(8px+4vw)] px-[calc(5px+10vw)] gap-6 items-start width-full">
      {/* Column 1 */}
      <div className="flex flex-col basis-1/3 gap-6">
        <PortfolioImage image="p-1" />
        <PortfolioImage image="p-6" />
      </div>

      {/* Column 2 */}
      <div className="flex flex-col basis-1/3 gap-6">
        <PortfolioImage image="p-7" />
        <PortfolioImage image="p-2" />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col basis-1/3 gap-6">
        <PortfolioImage image="p-3" />
        <PortfolioImage image="p-4" />
      </div>
    </div>
  );
}
