import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from 'react'

function Home() {
  return (
    <motion.div>        {/* without animation properties */}
    {/* <motion.div animation={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 0.5}}> */}       {/* with animation properties */}
        <Veggie />
        <Popular />
    </motion.div>
  )
}

export default Home;