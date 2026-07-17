import ReportCard from '../components/admin/ReportCard';

const report = {
  totalOrders: 1248,
  revenue: 24580,
  averageOrder: 19.70,
  monthlyOrders: 142,
};

const AdminReportsPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 p-6">

      <h1 className="text-4xl font-bold">
        Order Reports
      </h1>

      <p className="mt-2 text-slate-500">
        Business performance overview
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <ReportCard
          title="Total Orders"
          value={report.totalOrders}
        />

        <ReportCard
          title="Revenue"
          value={`$${report.revenue}`}
        />

        <ReportCard
          title="Average Order"
          value={`$${report.averageOrder}`}
        />

        <ReportCard
          title="Orders This Month"
          value={report.monthlyOrders}
        />

      </div>

    </main>
  );
};

export default AdminReportsPage;