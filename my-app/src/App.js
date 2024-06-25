/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

import './App.css'

const tabs = [
  {
    name: 'tab1',
    label: 'Tab 1',
    render: () => {
      return <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eveniet asperiores beatae cumque quae repudiandae sequi expedita eum architecto hic. Quidem dolores quaerat nemo pariatur modi aspernatur eum blanditiis repellat?</p>
    }
  },
  {
    name: 'tab2',
    label: 'Tab 2',
    render: () => {
      return <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita in non earum natus explicabo est aspernatur porro molestias fugiat eaque dignissimos, accusantium qui fugit praesentium ad cumque dolore temporibus excepturi.</p>
    }
  },
  {
    name: 'tab3',
    label: 'Tab 3',
    render: () => {
      return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eos sequi ducimus voluptas, accusamus amet? Ducimus, velit doloremque atque est quidem ullam nisi quod. Aut quisquam ipsa exercitationem mollitia ratione?</p>
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
            <a href='#' onClick={(e) => handleClick(e, tab)} >
              {tab.label}
            </a>

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