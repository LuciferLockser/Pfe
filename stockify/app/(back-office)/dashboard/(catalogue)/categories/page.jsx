"use client";
import PageHeader from "@/components/backoffice/PageHeader";
import TableAction from "@/components/backoffice/TableAction";

export default function Page() {
  return (
    <div>
      {/* Header */}
      <PageHeader title="Categories" href="/dashboard/categories/new" LinkTitle="Add Categories" />
      
      {/* Table Action */}
      <TableAction/>
    

      <div className="py-8">
        <h2>table</h2>

      </div>
    </div>
  );
}
