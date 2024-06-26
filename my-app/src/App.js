/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import InvestigationSection from './views/InvestigationSection';
import JoinSection from './views/JoinSection';
import ToolsSection from './views/ToolsSection';
import AboutUsSection from './views/AboutUsSection';
import './App.css'

const tabs = [
  {
    name: 'Sobre nosotros',
    label: 'Sobre nosotros',
    render: () => {
      return <AboutUsSection />
    }
  },
  // {
  //   name: 'Investigación',
  //   label: 'Investigación',
  //   render: () => {
  //     return <InvestigationSection />
  //   }
  // },
  // {
  //   name: 'Herramientas',
  //   label: 'Herramientas',
  //   render: () => {
  //     return <ToolsSection />
  //   }
  // },
  {
    name: '¡Colabora!',
    label: '¡Colabora!',
    render: () => {
      return <JoinSection />
    }
  }
];

const tabContentVariants = {
  initial: {
    y: 10,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -10,
    opacity: 0
  }
}

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleClick = (e, tab) => {
    e.preventDefault()

    setActiveTab(tab)
  }

  const isSelected = (tab) => activeTab.name === tab.name

  return (
    <div className={'tabWrapper'}>
      <div className={'tabHeader'}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={['tabItem', isSelected(tab) ? 'selected' : ''].join(' ')}
          >
            <p href='#' onClick={(e) => handleClick(e, tab)} >
              {tab.label}
            </p>

            {isSelected(tab) && <motion.div layoutId='indicator' className={'indicator'} />}
          </div>
        ))}
      </div>

      <div className={'tabContent'}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab.name || "empty"}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: .3
            }}
          >
            {activeTab && activeTab?.render()}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}

export default App