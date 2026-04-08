import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Globe, 
  ChevronRight,
  ArrowUpRight,
  User,
  X,
  Languages,
  Cpu,
  Award,
  Sparkles
} from "lucide-react";

const activities = [
  {
    title: "서울 에듀테크 소프트랩 앰버서더",
    summary: "교사 대상 에듀테크 연수 지원 및 트렌드 분석. 에듀테크 코리아 페어 참여.",
    details: [
      "초중고 교사 대상 에듀테크 연수 프로그램 지원 및 운영",
      "소프트랩 실증 제품 시연 및 '에듀테크 코리아 페어' 참여를 통한 에듀테크 트렌드 분석",
      "에듀테크 제품의 교육 현장 적용성 검토 및 피드백 제공"
    ]
  },
  {
    title: "건국대학교 공식 유튜브 크리에이터 'KU:REATOR'",
    summary: "공식 유튜브 채널 영상 기획, 촬영, 출연 및 편집.",
    details: [
      "대학 공식 유튜브 채널의 영상 콘텐츠 기획 및 시나리오 작성",
      "영상 촬영, 출연 및 프리미어 프로를 활용한 영상 편집",
      "대학 브랜딩 강화를 위한 트렌디한 숏폼 및 롱폼 콘텐츠 제작"
    ]
  },
  {
    title: "인사동 홍보 아이디어 공모전 수상",
    summary: "내/외국인 타겟 관광 코스 기획 및 홍보 영상 제작 수상.",
    details: [
      "내/외국인 관광객을 위한 맞춤형 인사동 테마 관광 코스 기획",
      "인사동의 전통과 현대가 어우러진 매력을 담은 홍보 동영상 제작",
      "창의적인 홍보 전략 제안을 통한 공모전 입상"
    ]
  }
];

const projects = [
  {
    category: "HR",
    title: "'P'사 인사관리시스템 개선",
    summary: "현행 인사관리시스템의 구조적 문제점 진단 및 데이터 기반 분석을 통해 조직 몰입도 향상을 위한 성과관리 및 보상설계 개선 방안을 제안했습니다.",
    details: [
      "현행 인사관리시스템의 구조적 문제점 진단 및 데이터 기반 분석",
      "조직 몰입도 향상을 위한 성과관리 및 보상설계(C&B) 개선 방안 제안",
      "데이터 기반의 의사결정 지원 체계 구축 제안",
      "직무 분석을 통한 적재적소 인력 배치 가이드라인 수립"
    ],
    tags: ["HRM", "C&B", "Data Analysis"]
  },
  {
    category: "L&D",
    title: "영주권자를 위한 시민참여 교육 프로그램 개발",
    summary: "국내 거주 영주권자들의 사회 통합과 능동적인 시민 참여를 독려하기 위한 맞춤형 교육 커리큘럼을 설계했습니다.",
    details: [
      "영주권자 대상 요구분석 및 교육 니즈 파악",
      "시민 참여 역량 강화를 위한 단계별 교육 모듈 설계",
      "학습자 중심의 교수 설계 및 교육 매뉴얼 제작",
      "교육 효과성 측정을 위한 평가 도구 개발"
    ],
    tags: ["Instructional Design", "L&D", "Curriculum Development"]
  }
];

const skills = [
  { category: "AI", icon: "🤖", items: ["ChatGPT", "Gemini", "Claude"] },
  { category: "Data & Analytics", icon: "📊", items: ["SQL (SQL Developer)"] },
  { category: "Content & Design", icon: "🎨", items: ["Adobe Lightroom", "Photoshop", "Premiere Pro"] },
  { category: "Productivity", icon: "⚡️", items: ["Notion", "Microsoft Office"] }
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Korean", level: "Native" }
];

const BentoCard = ({ 
  children, 
  className = "", 
  title, 
  icon: Icon,
  delay = 0,
  id
}: { 
  children: React.ReactNode, 
  className?: string, 
  title?: string, 
  icon?: any,
  delay?: number,
  id?: string
}) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white rounded-[2.5rem] border border-zinc-100 p-8 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 ${className}`}
  >
    {title && (
      <div className="flex items-center gap-3 mb-6">
        {Icon && <div className="p-2 bg-accent/5 rounded-xl"><Icon className="w-5 h-5 text-accent" /></div>}
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400">{title}</h2>
      </div>
    )}
    {children}
  </motion.div>
);

export default function App() {
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-accent/30">
      <AnimatePresence>
        {(selectedActivity || selectedProject) && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedActivity(null);
                setSelectedProject(null);
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => {
                  setSelectedActivity(null);
                  setSelectedProject(null);
                }}
                className="absolute top-8 right-8 p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-zinc-400" />
              </button>
              
              <div className="mb-10">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  {selectedProject ? <Sparkles className="w-7 h-7 text-accent" /> : <Trophy className="w-7 h-7 text-accent" />}
                </div>
                {selectedProject && (
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{selectedProject.category}</span>
                )}
                <h3 className="text-3xl font-bold mb-4">{selectedProject?.title || selectedActivity?.title}</h3>
                <p className="text-lg text-zinc-500 leading-relaxed">{selectedProject?.summary || selectedActivity?.summary}</p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Detailed Information</h4>
                <ul className="space-y-4">
                  {(selectedProject?.details || selectedActivity?.details || []).map((detail, i) => (
                    <li key={i} className="flex gap-4 text-zinc-600 leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => {
                  setSelectedActivity(null);
                  setSelectedProject(null);
                }}
                className="mt-12 w-full py-5 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-accent transition-all shadow-lg shadow-zinc-900/10"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-display font-bold tracking-tighter text-zinc-900">
            Chaeeun Hyun
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#education" className="hover:text-accent transition-colors">Education</a>
            <a href="#activities" className="hover:text-accent transition-colors">Activities</a>
          </div>
          <a href="#contact" className="px-5 py-2.5 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all">
            Connect
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        {/* Hero Section */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-12">
              People-First<span className="text-accent">,</span> <br />
              <span className="text-accent">Business-Driven.</span>
            </h1>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em]">TA & HR Partner</span>
              </div>
              <div className="flex gap-2">
                {["HRM", "Recruiting", "Branding"].map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* About Me - Full Width */}
          <BentoCard id="about" title="About Me" icon={User} className="md:col-span-12">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-6">현채은</h3>
                <p className="text-2xl leading-relaxed text-zinc-600 font-medium">
                  성장하는 조직의 '인재 밀도'를 높이는 비즈니스 파트너
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Focus</p>
                    <p className="text-sm font-bold">Global HR & TA</p>
                  </div>
                  <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Experience</p>
                    <p className="text-sm font-bold">Recruiting & Marketing</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-56 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
                <img 
                  src="https://raw.githubusercontent.com/chaeeun-hyun/portfolio/48bb622bd94a2c8a2e9df24e8e1dfd34cfaea8a7/2026%20%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg" 
                  alt="Chaeeun Hyun" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </BentoCard>

          {/* Skills - Parallel Row */}
          <BentoCard title="Skills" icon={Cpu} className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map(skill => (
                <div key={skill.category} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="px-3 py-1 bg-white border border-zinc-100 rounded-lg text-xs font-bold text-zinc-600 group-hover:border-accent/30 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Languages - Parallel Row */}
          <BentoCard title="Languages" icon={Languages} className="md:col-span-4">
            <div className="space-y-6 flex flex-col justify-center h-full pb-4">
              {languages.map(lang => (
                <div key={lang.name} className="flex justify-between items-end border-b border-zinc-100 pb-4 last:border-0">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Language</p>
                    <h4 className="text-xl font-bold text-zinc-800">{lang.name}</h4>
                  </div>
                  <span className="text-xs font-bold text-accent bg-accent/5 px-3 py-1 rounded-full uppercase tracking-widest">{lang.level}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Work Experience - Full Width or Large */}
          <BentoCard id="experience" title="Work Experience" icon={Briefcase} className="md:col-span-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  company: "CJ OliveNetworks",
                  role: "인재채용팀 인턴",
                  period: "2024.08 - 2024.12",
                  desc: ["신입 채용 프로세스 운영 지원", "채용 브랜딩 및 마케팅 전략 수립"]
                },
                {
                  company: "건국유업",
                  role: "마케팅팀 인턴",
                  period: "2023.03 - 2023.06",
                  desc: ["SNS 콘텐츠 기획 및 제작", "온/오프라인 행사 운영"]
                }
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 border-l border-zinc-100 group">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-200 group-hover:bg-accent transition-colors" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{exp.period}</p>
                  <h4 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{exp.company}</h4>
                  <p className="text-zinc-500 font-medium mb-4">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.desc.map((d, j) => (
                      <li key={j} className="text-sm text-zinc-600 flex gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Education - Full Width */}
          <BentoCard id="education" title="Education" icon={GraduationCap} className="md:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold">건국대학교</h4>
                    <p className="text-zinc-500 text-sm">교육공학 전공 / 경영학 부전공</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Seoul, KR</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold">대구외국어고등학교</h4>
                    <p className="text-zinc-500 text-sm">영어·중국어과 졸업</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-accent/5 rounded-[2rem] border border-accent/10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-accent" />
                  <h5 className="text-sm font-bold uppercase tracking-widest text-accent">Global Experience</h5>
                </div>
                <p className="text-xl font-bold text-zinc-800">THWS, Germany</p>
                <p className="text-sm text-zinc-500 mt-2">Exchange Student Program (2023.09 - 2024.02)</p>
              </div>
            </div>
          </BentoCard>

          {/* Activities - Full Width 3-Column Grid */}
          <BentoCard id="activities" title="Activities" icon={Award} className="md:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.map((activity, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedActivity(activity)}
                  className="p-8 rounded-[2rem] bg-zinc-50 border border-transparent hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">{activity.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                    {activity.summary}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Projects - Two Interactive Cards (Screenshot Style) */}
          <BentoCard title="Projects" icon={Sparkles} className="md:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <div 
                  key={i}
                  onClick={() => setSelectedProject(project)}
                  className="bg-zinc-50 p-8 rounded-[2.5rem] border border-zinc-100 hover:border-accent/20 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">
                        {project.category} {project.category === "HR" ? "SYSTEM IMPROVEMENT" : "PROGRAM DEVELOPMENT"}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-accent transition-colors">{project.title}</h3>
                    </div>
                    <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                      <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-white" />
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {project.details.slice(0, 2).map((detail, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Let's <span className="text-accent">grow</span> <br />together.</h2>
              <p className="text-xl text-zinc-400 max-w-md font-medium">
                성장과 도전의 기회를 기다립니다. <br />
                언제든 편하게 연락주세요.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <a 
                href="mailto:hce3127@gmail.com" 
                className="group flex items-center justify-between p-8 bg-zinc-800/50 border border-zinc-800 rounded-[2.5rem] hover:bg-zinc-800 transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-zinc-800 rounded-2xl group-hover:bg-accent transition-colors shadow-sm">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Email Me</p>
                    <p className="text-xl font-bold text-white">hce3127@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/chaeeun-hyun/" 
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-8 bg-zinc-800/50 border border-zinc-800 rounded-[2.5rem] hover:bg-zinc-800 transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-zinc-800 rounded-2xl group-hover:bg-accent transition-colors shadow-sm">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">LinkedIn</p>
                    <p className="text-xl font-bold text-white">Chaeeun Hyun</p>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2026 Chaeeun Hyun. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
