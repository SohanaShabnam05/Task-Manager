import { TABS } from "../redux/action/type";
import { useDispatch } from 'react-redux';
import { toggleTab } from "../redux/action";

export const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch();

    return (
        TABS.map((tab, index) => (
            <button
                key={index} // Add the key prop with a unique value
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}



