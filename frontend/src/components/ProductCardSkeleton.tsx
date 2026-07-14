const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Image */}
      <div className="h-52 bg-slate-200" />

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="h-6 w-3/4 rounded bg-slate-200" />

        <div className="h-4 w-20 rounded bg-slate-200" />

        <div className="h-8 w-24 rounded bg-slate-200" />

        <div className="h-12 rounded-lg bg-slate-200" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;