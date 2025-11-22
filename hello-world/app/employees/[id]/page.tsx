type EmployeePageProps = {
  params: Promise<{ id: string }>; // Next.js wraps params in a Promise
};

export default async function Employee(props: EmployeePageProps) {
  const params = await props.params; // unwrap the promise
  const id = params.id;

  return (
    <main>
      <h1>Employee Page {id}</h1>
    </main>
  );
}