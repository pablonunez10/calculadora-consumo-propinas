import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types"
type OrderContentsProps = {
    order : OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

function OrderContents({order , removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>
        <div className="space-y-3 mt-10">
            {order.map(item => (
                  <div 
                  key={item.id} 
                  className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center " >
                    <div>
                    <p className="text-lg"> 
                      {item.name} - {formatCurrency(item.price * item.quantity)}
                    </p>
                    <p className="font-black">
                      Cantidad : {item.quantity}
                    </p>
                    </div>
                    <button 
                      className="bg-red-600 h-8 w-8 rounded-full text-white font-black" 
                      onClick={() => removeItem(item.id)}
                    >
                      x
                    </button>
                  </div>
                ))}
        </div>

    </div>
  )
}

export {OrderContents}
