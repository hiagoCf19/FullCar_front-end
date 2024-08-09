const HeaderCreateAd = () => {
  return (

    <>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="rounded-full bg-red-600 size-6 text-zinc-50 flex justify-center items-center p-2">1</div>
          <h3 className="font-medium">Preencha os dados do veículo</h3>
        </div>
        <div className="flex gap-2">
          <div className="rounded-full bg-zinc-300 size-5 text-zinc-50 flex justify-center items-center text-lg">2</div>
          <div className="rounded-full bg-zinc-300 size-5 text-zinc-50 flex justify-center items-center text-lg">3</div>
        </div>
      </div>

    </>


  );
}

export default HeaderCreateAd;