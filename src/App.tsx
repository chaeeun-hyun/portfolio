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
  X
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

const Section = ({ title, children, id, icon: Icon }: { title: string, children: React.ReactNode, id?: string, icon?: any }) => (
  <section id={id} className="py-20 border-t border-zinc-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-12">
        {Icon && <Icon className="w-6 h-6 text-accent" />}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const ExperienceCard = ({ company, role, period, description }: { company: string, role: string, period: string, description: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 last:mb-0"
  >
    <div className="md:col-span-1">
      <p className="text-sm font-medium text-zinc-400 font-mono">{period}</p>
    </div>
    <div className="md:col-span-3">
      <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{company}</h3>
      <p className="text-lg text-zinc-600 mb-4">{role}</p>
      <ul className="space-y-2">
        {description.map((item, i) => (
          <li key={i} className="flex gap-3 text-zinc-600 leading-relaxed">
            <span className="text-accent mt-1.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectCard = ({ title, category, description, tags }: { title: string, category: string, description: string[], tags?: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:border-accent/20 transition-all"
  >
    <div className="flex justify-between items-start mb-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{category}</span>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="p-3 bg-white rounded-full shadow-sm">
        <ArrowUpRight className="w-5 h-5 text-accent" />
      </div>
    </div>
    <ul className="space-y-3 mb-6">
      {description.map((item, i) => (
        <li key={i} className="flex gap-3 text-zinc-600">
          <ChevronRight className="w-4 h-4 text-accent mt-1 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
    {tags && (
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-zinc-500 border border-zinc-100">
            {tag}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);

export default function App() {
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedActivity(null)}
                className="absolute top-6 right-6 p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-zinc-400" />
              </button>
              
              <div className="mb-8">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{selectedActivity.title}</h3>
                <p className="text-lg text-zinc-500">{selectedActivity.summary}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Detailed Activities</h4>
                <ul className="space-y-4">
                  {selectedActivity.details.map((detail, i) => (
                    <li key={i} className="flex gap-4 text-zinc-600 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setSelectedActivity(null)}
                className="mt-12 w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-accent transition-all"
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
          <div className="text-xl font-display font-bold tracking-tighter">
            CHAE<span className="text-accent">EUN</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#education" className="hover:text-accent transition-colors">Education</a>
            <a href="#contact" className="px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-accent transition-all">Let's Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8">
              HR <br />
              <span className="text-accent">Specialist</span>.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-lg font-medium text-zinc-500 uppercase tracking-widest">HR & Recruiting Specialist</span>
              </div>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-xl">
                사람과 조직의 성장을 이끄는 HR 전문가를 꿈꾸는 현채은입니다. 
                글로벌 역량과 채용 경험을 바탕으로 비즈니스에 기여하는 임팩트를 만듭니다.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <Section title="About Me" id="about" icon={User}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-2xl leading-relaxed text-zinc-700">
              글로벌 커뮤니케이션 역량과 채용 운영 경험을 바탕으로 글로벌 비즈니스의 성장을 이끄는 HR 전문가로 성장하고자 합니다. 
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] max-w-[180px] mx-auto overflow-hidden rounded-lg border-4 border-white shadow-lg bg-zinc-50"
          >
            <img 
              src="https://picsum.photos/seed/professional-woman/600/800" 
              alt="Chaeeun Hyun" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section title="Work Experience" id="experience" icon={Briefcase}>
        <ExperienceCard 
          company="CJ OliveNetworks"
          role="인재채용팀 인턴"
          period="2024.08 - 2024.12"
          description={[
            "신입 채용 프로세스 운영: 신입 채용 전반 프로세스 지원 및 커뮤니케이션",
            "채용 브랜딩 및 마케팅: 맞춤형 채용 브랜딩 전략 수립 및 관련 마케팅 업무 수행"
          ]}
        />
        <ExperienceCard 
          company="건국유업"
          role="마케팅팀 인턴"
          period="2023.03 - 2023.06"
          description={[
            "SNS 채널 콘텐츠 기획 및 제작: SNS 채널 디지털 마케팅 콘텐츠 기획 및 디자인",
            "온/오프라인 행사 기획 및 운영: 온오프라인 행사 이벤트 실행"
          ]}
        />
      </Section>

      {/* Projects Section */}
      <Section title="Projects & Academic Focus" id="projects" icon={ArrowUpRight}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            category="HR System Improvement"
            title="글로벌 엔터테인먼트 'P'사 인사관리시스템 개선"
            description={[
              "현행 인사관리시스템의 구조적 문제점 진단 및 데이터 기반 분석",
              "조직 몰입도 향상을 위한 성과관리 및 보상설계(C&B) 개선 방안 제안"
            ]}
            tags={["HRM", "Data Analysis", "Compensation", "Performance"]}
          />
          <div className="flex flex-col justify-center p-8 border-2 border-dashed border-zinc-100 rounded-3xl">
            <p className="text-zinc-400 text-center italic">More projects coming soon...</p>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section title="Education" id="education" icon={Globe}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">건국대학교 (Konkuk University)</h4>
                <p className="text-zinc-500">교육공학 전공 / 경영학 부전공</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">대구외국어고등학교</h4>
                <p className="text-zinc-500">영어·중국어과 졸업</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Global Experience</h3>
            <div className="p-8 bg-accent/5 rounded-3xl border border-accent/10">
              <h4 className="text-xl font-bold mb-2">Technische Hochschule Würzburg-Schweinfurt (THWS)</h4>
              <p className="text-accent font-medium mb-4">Germany</p>
              <p className="text-zinc-600">Exchange Student Program (2023.09 - 2024.02)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Activities & Awards */}
      <Section title="Activities & Awards" icon={Trophy}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedActivity(activity)}
              className="p-8 bg-zinc-50 rounded-3xl border border-transparent hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                  <Trophy className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-accent transition-colors" />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{activity.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {activity.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <footer id="contact" className="bg-zinc-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's build the <br /><span className="text-accent">future</span> together.</h2>
              <p className="text-xl text-zinc-400 max-w-md">
                새로운 도전과 협업의 기회를 기다립니다. 
                언제든 편하게 연락주세요.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <a 
                href="mailto:hce3127@gmail.com" 
                className="group flex items-center justify-between p-8 border border-zinc-800 rounded-3xl hover:bg-zinc-800 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-zinc-800 rounded-2xl group-hover:bg-accent transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Email Me</p>
                    <p className="text-xl font-bold">hce3127@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/chaeeun-hyun/" 
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-8 border border-zinc-800 rounded-3xl hover:bg-zinc-800 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-zinc-800 rounded-2xl group-hover:bg-accent transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">LinkedIn</p>
                    <p className="text-xl font-bold">Chaeeun Hyun</p>
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white" />
              </a>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
            <p>© 2026 Chaeeun Hyun. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
