import { ProfilePageHeader } from "../components/ProfilePageHeader.tsx";
import { MonthActivity } from "../components/MonthActivity.tsx";

import Layout from "../layouts/layout.tsx"

export default function Profile() {
  return (
    <Layout className="gap-3">
      <ProfilePageHeader />

      <MonthActivity
        monthName={"January"}
      />

    </Layout>
  );
}
