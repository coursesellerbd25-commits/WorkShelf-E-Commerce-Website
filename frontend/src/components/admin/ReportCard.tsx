type Props = {
  title: string;
  value: string | number;
};

const ReportCard = ({
  title,
  value,
}: Props) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <p className="text-slate-500">
        {title}
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
};

export default ReportCard;