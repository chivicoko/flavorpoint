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




// ---------------sample test code from Elite Software Automation-----------------
// import React from "react";
// import { createRoot } from "react-dom/client";

// function Greeter(props) {
//   return <div>Hello {props.user}</div>;
// }

// document.body.innerHTML = "<div id='root'> </div>";
// const root = createRoot(document.getElementById("root"))
// root.render(<Greeter user="Admin"/>);

