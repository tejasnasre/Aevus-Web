import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Users, Target, Award, BarChart3 } from 'lucide-react';

const ImpactStatistics = () => {
  const [animatedCounts, setAnimatedCounts] = useState<{ [key: string]: number }>({});
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    {
      icon: Clock,
      value: 60,
      suffix: '%',
      title: 'Time Reduction',
      description: 'Less time spent on manual roll-call, more time for teaching',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: Users,
      value: 40,
      suffix: '%',
      title: 'Productivity Increase',
      description: 'Students more productive during free periods',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-600/10'
    },
    {
      icon: Target,
      value: 80,
      suffix: '%',
      title: 'Error Reduction',
      description: 'Fewer attendance errors and missing records',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-500/10 to-indigo-600/10'
    },
    {
      icon: Award,
      value: 35,
      suffix: '%',
      title: 'Task Completion',
      description: 'Higher completion rate for academic tasks',
      color: 'from-orange-500 to-yellow-600',
      bgColor: 'from-orange-500/10 to-yellow-600/10'
    },
    {
      icon: TrendingUp,
      value: 25,
      suffix: '%',
      title: 'Absenteeism Reduction',
      description: 'Less chronic absenteeism with early alerts',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-500/10 to-rose-600/10'
    },
    {
      icon: BarChart3,
      value: 99.9,
      suffix: '%',
      title: 'Accuracy Rate',
      description: 'Multi-layer verification ensures precision',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-500/10 to-pink-600/10'
    }
  ];

  const animateCount = (finalValue: number, key: string, duration: number = 2000) => {
    const increment = finalValue / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= finalValue) {
        current = finalValue;
        clearInterval(timer);
      }
      setAnimatedCounts(prev => ({ ...prev, [key]: current }));
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Start animations for all statistics
            statistics.forEach((stat, index) => {
              setTimeout(() => {
                animateCount(stat.value, stat.title, 2000);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="impact-section section-padding relative">
      <div className="container-custom">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Smart India Hackathon solution delivers quantifiable results that transform 
            educational institutions and improve student outcomes
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            const animatedValue = animatedCounts[stat.title] || 0;
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl border border-white/10 glass-effect hover-glow transition-all duration-700 ${
                  isVisible 
                    ? 'animate-scale-in opacity-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Animated Counter */}
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {animatedValue.toFixed(stat.value === 99.9 ? 1 : 0)}
                    </span>
                    <span className="text-2xl font-bold text-gray-400 ml-1">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {stat.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6 w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isVisible ? `${(animatedValue / stat.value) * 100}%` : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-effect p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Transform Your Institution?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join the educational revolution and experience these impressive results firsthand. 
              Our solution is designed to scale from single classrooms to entire institutional networks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Request Demo
              </button>
              <button className="px-8 py-4 rounded-full font-semibold text-lg text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;