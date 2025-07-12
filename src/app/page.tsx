export default function Home() {
  const renderName = (name: any) => {
    const name2 = 'Mahdi';
    return <span>Hello {name}</span>;
  };
  // console.log("welcome");
  return (
    <div>
      <h1>My name is Moein</h1>
      {renderName('Moein')}
    </div>
  );
}
