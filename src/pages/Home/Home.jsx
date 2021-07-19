import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Filter from "../../components/Filter/Filter";
import Items from "../../components/Items/Items";
import s from "./Home.module.css"

const Home = () => {
    return (
        <div className={s.pageRow}>
            <Sidebar/>
            <div className={s.pageContent}>
                <Filter/>
                <Items/>
            </div>
        </div>
    )
};

export default Home