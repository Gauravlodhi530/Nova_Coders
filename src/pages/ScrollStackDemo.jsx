import React, { useContext } from 'react'
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'
import ServiceCard from '../components/ServiceCard'
import { DataContext } from '../context/DataProvider';

const ScrollStackDemo = () => {
  const { services } = useContext(DataContext);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Our Services</span>
        </h2>
        <p className="text-gray-300 mt-2">Explore what we offer as you scroll</p>
      </div>
      <div style={{height: '100vh'}}>
        <ScrollStack
          className="no-scrollbar"
          itemDistance={220}
          itemScale={0.05}
          itemStackDistance={32}
          stackPosition="26%"
          baseScale={0.92}
         
          blurAmount={1}
          useWindowScroll={false}
        >
          {services.map((service, index) => {
            const accents = [
              'from-fuchsia-500/20 via-purple-500/10 to-cyan-500/20',
              'from-cyan-500/20 via-blue-500/10 to-emerald-500/20',
              'from-rose-500/20 via-orange-500/10 to-amber-500/20',
            ];
            const accent = accents[index % accents.length];
            return (
              <ScrollStackItem
                key={index}
                itemClassName={`h-96 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] relative overflow-hidden`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} />
                <div className="relative pointer-events-auto">
                  <ServiceCard {...service} />
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </div>
  )
}

export default ScrollStackDemo
