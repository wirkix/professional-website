import { getDictionary } from "@/lib/i18n";
import JobMarketRadarReport from "./Report";

export default async function Page() {
  const { t } = await getDictionary();
  return <JobMarketRadarReport t={t.jobMarketRadarReport} />;
}
