import { DashboardEmpty } from "./components/DashboardEmpty"
import { DashboardCard } from "./components/DashboardCard"
import { useEffect , useState } from "react";
import { getUserOrder } from "../../services";
import { useTitle } from "../../Hooks/useTitle";
import { toast } from "react-toastify"


export const DashboardPage = () => {
    const [order ,setOrder] = useState([]);
    useTitle("DashBoard")
 

    useEffect(()=>{
      async function fetchOrders(){
        try{
        const data = await getUserOrder()
      setOrder(data);

        }
        catch(error){
          toast.error(error.message,{closeButton:true , position :"bottom-center",
          autoClose:5000,
          closeOnClick : true})
        }
      }
      fetchOrders()
    } , [])

    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>

        <section>
            {  order.length && order.map((orders) => (< DashboardCard key={orders.id} orders={orders} />)) }
        </section>
            { order.length === 0 && <DashboardEmpty />}
        <section>

        </section>
      </main>
    )
  }