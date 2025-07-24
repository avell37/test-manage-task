import { Provider } from "react-redux"
import { store } from "./store/store"
import { Suspense } from "react"
import { TaskPage } from "@pages/TaskPage/TaskPage"

export const AppProvider = () => {

    return (
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <TaskPage />
            </Suspense>
        </Provider>
    )
}
