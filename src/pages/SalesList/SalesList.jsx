

export const SalesList = props => {

  const salesResults = [1,2,3,4,5,]

  return (
    <>
        <section className="w-3/4 mt-6 mx-auto">
            
            <ul className="space-y-3">
            {salesResults.map((snippet, idx) => (
                <li key={idx} className="bg-white shadow overflow-auto rounded-md px-6 py-4">
                  {idx}
                </li>
            ))}
            </ul>
        </section>
        <div className="mb-4"></div>
        </>
  )
}