export default function Projects({ title, date, info }) {
  return (
    <div className="grid grid-flow-row justify-items-center my-8">
      <div className="max-w-xxs md:max-w-xl lg:pl-6">
        <h1>{title}</h1>
        <h2 className="pt-2 pb-10">{date}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
}
