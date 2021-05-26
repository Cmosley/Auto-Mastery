import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { TruckIcon, CurrencyDollarIcon, CashIcon } from '@heroicons/react/outline'
import LineChart from "../../components/SalesGraph/SalesGraph"


const stats = [
  { id: 1, name: 'Total Sales', stat: '71,897', icon: CashIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Ticket', stat: '58.16%', icon: CurrencyDollarIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Car Count', stat: '24.57%', icon: TruckIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Dashboard = props => {
  return (
    <>
    <div className="mt-4 container mx-auto">
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="mx-8 mt-8 ">
        <LineChart />
        </div>
        
      </div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    {' '}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>

    </>
  )
}
    