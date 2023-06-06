import HomePage from "../features/HomePage"
import ConnectWalletPage from "../features/ConnectWalletPage"
import CreateWalletPage from "../features/CreateWalletPage"
import DashboardPage from "../features/DashboardPage"
import MinePage from "../features/MinePage"
import SendCoinPage from "../features/SendCoinPage"
import ShowStatisticsPage from "../features/ShowStatisticsPage"

const routes = [
    { path: "/", component: HomePage },
    { path: "/connectwallet", component: ConnectWalletPage },
    { path: "/createwallet", component: CreateWalletPage },
    { path: "/dashboard", component: DashboardPage },
    { path: "/mine", component: MinePage },
    { path: "/sendcoin", component: SendCoinPage },
    { path: "/showshatistics", component: ShowStatisticsPage }
]

export { routes };