import { Separator } from "@/components/ui/separator";
import SettingsForm from "./form";
import db from "@/drizzle";
import { eq } from "drizzle-orm";
import { settingsTable } from "@/drizzle/schema";

export default async function page() {
  const settingsData = await db.query.settingsTable.findFirst({
    where: eq(settingsTable.id, 1),
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <Separator />
      <SettingsForm settingsData={settingsData} />
    </div>
  );
}
