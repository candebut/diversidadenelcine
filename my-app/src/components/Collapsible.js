import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faChevronUp,
//     faChevronDown
// } from "@fortawesome/fontawesome-free-solid";
const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 900, damping: 40 }
};

const Collapsible = ({ open = false, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div className="card">
                <div>
                    <div className="chevron-title" onClick={handleFilterOpening}>
                        <h2>{title}</h2>

                        {!isOpen ? (
                            <FaChevronDown />
                        ) : (
                            <FaChevronUp />

                        )}

                    </div>
                </div>

                <motion.div className="border-bottom" {...animations}>
                    <motion.div>{isOpen && <motion.div {...animations} className="p-3">{children}</motion.div>}</motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Collapsible;