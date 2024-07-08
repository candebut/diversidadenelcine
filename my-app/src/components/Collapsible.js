import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion'

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
                        <h3>{title}</h3>

                        {!isOpen ? (
                            <FaChevronDown />
                        ) : (
                            <FaChevronUp />

                        )}

                    </div>
                </div>
                <AnimatePresence initial={false}>
                    <motion.div className="border-bottom">
                        <motion.div >{isOpen && <motion.div initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }} transition={{
                                duration: 1
                            }} className="p-3">{children}</motion.div>}</motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default Collapsible;