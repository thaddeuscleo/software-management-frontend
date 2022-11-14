export default function SoftwareDetail({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { id: string };
}) {
  return (
      <div>
          <p>{params.id}</p>
          <p>{searchParams.id}</p>
      </div>
  );
}
