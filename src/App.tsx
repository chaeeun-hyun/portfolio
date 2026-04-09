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
    title: "건국대학교 ‘KU:REATOR’",
    summary: "공식 유튜브 채널 영상 기획, 촬영, 출연 및 편집",
    details: [
      "대학 공식 유튜브 채널의 영상 콘텐츠 기획 및 시나리오 작성",
      "영상 촬영, 출연 및 프리미어 프로를 활용한 영상 편집"
    ],
    links: [
      { label: "영상 1", url: "https://youtu.be/zyoQiHnNQ-w?si=8_BjF5UxNAr6E_XF" },
      { label: "영상 2", url: "https://youtu.be/UOndG9hycv4?si=IongQz83g6M8DRhg" },
      { label: "영상 3", url: "https://youtu.be/d_0aQjJ_wOY?si=aJOStIeV-sHuKVzM" },
      { label: "영상 4", url: "https://youtu.be/xZIxAhvDFoQ?si=CqcQLBzAdLA_cQKJ" }
    ]
  },
  {
    title: "에듀테크 소프트랩",
    summary: "초·중·고 교사 대상 에듀테크 연수 프로그램 지원 및 트렌드 분석",
    details: [
      "초·중·고 교사 대상 에듀테크 연수 프로그램 지원",
      "에듀테크 제품 리서치 및 실증 제품의 교육 현장 적용성 피드백",
      "‘에듀테크 코리아 페어’ 참여 및 최신 에듀테크 산업 트렌드 분석"
    ]
  },
  {
    title: "인사동 홍보 공모전",
    summary: "인사동 관광 코스 기획 및 로컬 큐레이팅 SNS 운영 제안",
    details: [
      "‘슬로우 트래블(Slow Travel)’을 컨셉으로 휴식과 재충전에 집중하는 인사동 관광 코스 기획",
      "내국인을 위한 ‘재충전 코스’와 외국인을 위한 ‘첫 방문 누빔 코스’로 나누어 맞춤형 장소 제안",
      "인스타그램을 활용한 인사동 로컬 큐레이팅 SNS 계정 운영 방안 제안"
    ]
  },
  {
    title: "전통시장 활성화 프로젝트",
    summary: "[4.16 재단 청년 꿈 지원사업] 꿀떡 프로젝트 기획 및 운영",
    goal: "코로나19로 침체된 전통시장에 청년들의 발길을 이끌어 활기를 불어넣고, 세대 간 소통의 장 마련",
    pillars: [
      {
        title: "Role & Task",
        items: [
          "프로그램 기획 및 총괄: 행사시장(공릉동 도깨비시장)컨택 및 섭외 담당, ‘시장 탐방 지원’, ‘참여형 부스’ 등 행사 전반 기획 및 운영",
          "로컬 스토리텔링: 시장 상인 인터뷰 진행, SNS 카드뉴스와 온라인 콘텐츠로 제작하여 홍보",
          "행사 브랜딩 및 소통: 현수막, 리플릿 등 디자인 굿즈 제작 및 시장 사업단과의 적극적인 미팅을 통한 현장 조율"
        ]
      },
      {
        title: "Result & Insight",
        items: [
          "성공적인 참여자 모집으로 침체된 시장에 청년들의 생기를 불어넣고, 행사 당일 북적이는 시장 분위기 조성",
          "팀원 및 시장 관계자들과의 유기적인 협업으로 프로젝트를 완수하며, 기획부터 실행까지 이끄는 주도적인 태도와 소통의 중요성 배움"
        ]
      }
    ]
  }
];

const projects = [
  {
    category: "HR",
    title: "인적자원관리 프로젝트",
    summary: "글로벌 엔터테인먼트 'p'사의 기존의 수직적인 성과·보상 체계 진단, 통합적 HR 솔루션 제안",
    problem: "창의성과 민첩성이 핵심 경쟁력인 글로벌 엔터테인먼트 기업에서 발생하는 수직적이고 통제적인 HR 관행의 한계 진단",
    goal: "비즈니스 전략과 HR 시스템의 적합성을 연계하고, 구성원의 신뢰를 회복하는 통합적 성과관리 및 보상 체계 제안",
    pillars: [
      {
        title: "성과관리 체계 개편",
        items: [
          "단기 실적 중심에서 벗어나 창의성, 협업 능력을 종합 반영하는 '업적+역량 평가 모델' 구축",
          "공정성 확보를 위한 '360도 다면평가' 도입 기획"
        ]
      },
      {
        title: "보상 시스템 재설계",
        items: [
          "글로벌 경쟁사 벤치마킹을 통한 외적 형평성(경쟁력)과 내부 직무가치 평가를 결합한 기본급 정책선 수립",
          "역량 개발을 유도하는 '스킬 기반 임금(Skill-based Pay)' 및 성과급 제도 기획"
        ]
      }
    ],
    tags: ["HRM", "Performance Management", "Compensation", "Data Analysis"]
  },
  {
    category: "L&D",
    title: "교육공학과 학술전시회",
    summary: "영주권자의 사회 통합을 위한 7주 과정 '시민참여 및 선거 교육 프로그램' 기획",
    problem: "국내 거주 영주권자들의 사회 통합 기회 부족 및 능동적인 시민 참여를 위한 체계적인 교육 커리큘럼 부재",
    goal: "사회 참여 장벽 극복 및 실천 역량 강화를 통해 능동적인 민주시민으로서의 사회 통합 기여",
    pillars: [
      {
        title: "Curriculum & Strategy",
        items: [
          "학습자 및 요구 분석 기반 프로그램 커리큘럼 기획",
          "온·오프라인 블렌디드 러닝 및 ARCS 동기유발 모형 적용"
        ]
      },
      {
        title: "Production Media",
        items: [
          "마이크로 러닝 웹사이트, 맞춤형 워크북, 게미피케이션(보드게임) 개발",
          "선거용어집, 활동기록 여권 등 학습 보조매체 제작"
        ]
      }
    ],
    tags: ["Curriculum Development", "Instructional Design", "Gamification"]
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

const workExperiences = [
  {
    company: "CJ올리브네트웍스",
    role: "인재채용팀 인턴",
    period: "2024.08 - 2024.12",
    desc: ["신입 채용 프로세스 운영 지원", "채용 브랜딩 콘텐츠 및 행사 기획·실행"],
    projects: [
      {
        title: "신입 채용 프로세스 운영 지원",
        goal: "안정적이고 체계적인 채용 운영을 통해 긍정적인 지원자 경험 제공",
        pillars: [
          {
            title: "Process Management",
            items: [
              "채용 전형 일정 관리 및 프로세스 운영",
              "채용 시스템 세팅 및 평가 프로세스 지원",
              "면접 Timetable 설계 및 온라인 면접 환경(ZEP) 운영"
            ]
          },
          {
            title: "Communication",
            items: [
              "지원자 면접 일정 조율 및 전형 안내",
              "현업 면접관–지원자 간 커뮤니케이션 지원"
            ]
          },
          {
            title: "Detail Orientation",
            items: [
              "지원자/입사 서류 관리 및 데이터 정리",
              "면접 가이드 및 안내 자료 제작"
            ]
          }
        ],
        summary: "채용 전 과정의 안정적 운영으로 일정 지연 없이 프로세스 완료, 명확한 커뮤니케이션과 가이드 제공을 통해 지원자 경험 개선"
      },
      {
        title: "채용브랜딩 프로젝트 주도",
        goal: "일관된 채용 메시지 전달 및 지원자 접점 중심의 채용 경험 개선",
        pillars: [
          {
            title: "문제 인식",
            items: ["채용 접점별 메시지 일관성 부족", "채용/직무 정보 및 접근성 부족"]
          },
          {
            title: "전략 및 실행",
            items: ["EVP 기반 채용 브랜딩 전략 설계", "지원자 접점 중심 채용 경험 개선"]
          },
          {
            title: "구체적 실행 업무",
            items: [
              "회사 EVP 정립 및 채용 콘텐츠 제작",
              "현직자 직무 인터뷰 및 직무 인사이트 제공",
              "채용 블로그 리뉴얼"
            ]
          }
        ],
        summary: "일관된 채용 메시지 전달을 통한 브랜드 경험 강화"
      },
      {
        title: "채용 행사 및 지원자 접점 관리",
        goal: "지원자 접점에서의 긍정적 경험 설계 및 채용 브랜드 인지도 강화",
        pillars: [
          {
            title: "Key Tasks",
            items: [
              "ONS DAY 및 온라인 설명회 기획/운영 지원",
              "행사 홍보, 디자인물(PPT/배너 등) 및 콘텐츠 제작",
              "실시간 운영 및 현장 커뮤니케이션 관리"
            ]
          }
        ],
        summary: "온·오프라인 채용 행사 안정적 운영으로 긍정적 지원자 경험 형성"
      }
    ]
  },
  {
    company: "건국유업",
    role: "마케팅팀 인턴",
    period: "2023.03 - 2023.06",
    desc: ["SNS 채널 운영 및 CX 관리", "온/오프라인 프로모션 및 행사 운영"],
    projects: [
      {
        title: "SNS 마케팅 및 고객 경험(CX) 관리",
        goal: "소비자 참여 중심 콘텐츠 기획 및 긍정적인 고객 경험(CX) 설계",
        pillars: [
          {
            title: "SNS 채널 및 콘텐츠 기획",
            items: [
              "타겟 트렌드 반영 카드뉴스 및 숏폼(릴스) 기획·제작",
              "브랜드 톤앤매너 기반 카피라이팅 및 해시태그 전략 수립",
              "인스타그램 팔로워 20% 증가 및 역대 최다 릴스 조회수 달성"
            ]
          },
          {
            title: "CX 및 리뷰 관리",
            items: [
              "공식몰 리뷰 모니터링 및 1:1 맞춤형 답글 작성",
              "인스타그램 DM 대응 및 인게이지먼트 관리",
              "인플루언서 및 파워블로거 네트워킹 풀 구축"
            ]
          }
        ],
        summary: "타겟 맞춤형 콘텐츠 전략과 밀착 소통으로 브랜드 영향력 강화"
      },
      {
        title: "온·오프라인 프로모션 및 운영 지원",
        goal: "세일즈 프로모션의 성공적인 론칭 및 고객 접점 확대",
        pillars: [
          {
            title: "온라인 프로모션 및 AMD 지원",
            items: [
              "경쟁사 시장 조사 및 가격 비교 리서치 진행",
              "행사 목적에 맞는 프로모션 배너 및 홍보 소재 기획/제작",
              "타 부서 협업을 통한 타임라인 내 프로모션 성공적 실행"
            ]
          },
          {
            title: "온·오프라인 행사 운영",
            items: [
              "이벤트 기획 보조 및 원활한 현장 오퍼레이션 리딩",
              "꼼꼼한 현장 대응을 통한 고객 참여도 향상",
              "매끄러운 행사 운영으로 긍정적인 브랜드 경험(CX) 창출"
            ]
          }
        ],
        summary: "성공적인 프로모션 론칭 및 매끄러운 현장 운영으로 고객 참여 극대화"
      }
    ]
  }
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
  const [selectedExperience, setSelectedExperience] = useState<typeof workExperiences[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-accent/30">
      <AnimatePresence>
        {(selectedActivity || selectedProject || selectedExperience) && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedActivity(null);
                setSelectedProject(null);
                setSelectedExperience(null);
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => {
                  setSelectedActivity(null);
                  setSelectedProject(null);
                  setSelectedExperience(null);
                }}
                className="absolute top-8 right-8 p-2 hover:bg-zinc-100 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-zinc-400" />
              </button>
              
              {selectedExperience ? (
                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                      <Briefcase className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">{selectedExperience.company}</h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">{selectedExperience.period}</p>
                  </div>

                  <div className="space-y-16">
                    {selectedExperience.projects?.map((project, idx) => (
                      <div key={idx} className="space-y-8 relative">
                        {selectedExperience.projects!.length > 1 && (
                          <div className="flex items-center gap-4 mb-6">
                            <div className="px-3 py-1 bg-accent text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                              Project {idx + 1}
                            </div>
                            <div className="h-[1px] flex-1 bg-zinc-100"></div>
                          </div>
                        )}
                        
                        <div className="space-y-4">
                          <h4 className="text-2xl font-bold text-zinc-900">{project.title}</h4>
                          {project.goal && (
                            <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 text-center">
                              <p className="text-lg font-bold text-accent">{project.goal}</p>
                            </div>
                          )}
                        </div>

                        {project.pillars && (
                          <div className={`grid grid-cols-1 ${
                            project.pillars.length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 
                            project.pillars.length === 2 ? 'md:grid-cols-2' : 
                            'md:grid-cols-3'
                          } gap-4`}>
                            {project.pillars.map((pillar, i) => (
                              <div key={i} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 space-y-4">
                                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-2">{pillar.title}</h5>
                                <ul className="space-y-2">
                                  {pillar.items.map((item, j) => (
                                    <li key={j} className="text-sm text-zinc-600 leading-relaxed flex gap-2">
                                      <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {project.summary && (
                          <div className="pt-6 border-t border-zinc-100">
                            <p className="text-lg font-medium text-zinc-800 leading-relaxed text-center">
                              {project.summary.split(',').map((part, i) => (
                                <React.Fragment key={i}>
                                  {i > 0 && <br />}
                                  <span className={i > 0 ? "pl-4" : ""}>{part.trim()}</span>
                                </React.Fragment>
                              ))}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
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
                    {(selectedActivity?.problem || (selectedProject as any)?.problem) && (
                      <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col md:flex-row gap-6 items-center">
                        <div className="px-4 py-2 bg-zinc-900 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shrink-0">
                          Problem
                        </div>
                        <p className="text-zinc-600 font-medium leading-relaxed">
                          {selectedActivity?.problem || (selectedProject as any)?.problem}
                        </p>
                      </div>
                    )}

                    {(selectedActivity?.goal || (selectedProject as any)?.goal) && (
                      <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 flex flex-col md:flex-row gap-6 items-center">
                        <div className="px-4 py-2 bg-accent text-white text-[10px] font-bold rounded-full uppercase tracking-widest shrink-0">
                          Goal
                        </div>
                        <p className="text-accent font-bold leading-relaxed">
                          {selectedActivity?.goal || (selectedProject as any)?.goal}
                        </p>
                      </div>
                    )}

                    {(selectedActivity?.pillars || (selectedProject as any)?.pillars) ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(selectedActivity?.pillars || (selectedProject as any)?.pillars).map((pillar: any, i: number) => (
                          <div key={i} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 space-y-4">
                            <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-2">{pillar.title}</h5>
                            <ul className="space-y-2">
                              {pillar.items.map((item: string, j: number) => (
                                <li key={j} className="text-sm text-zinc-600 leading-relaxed flex gap-2">
                                  <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Detailed Information</h4>
                        <ul className="space-y-4">
                          {((selectedProject as any)?.details || selectedActivity?.details || []).map((detail: string, i: number) => (
                            <li key={i} className="flex gap-4 text-zinc-600 leading-relaxed">
                              <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {selectedActivity?.links && (
                      <div className="mt-8 pt-8 border-t border-zinc-100 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">&lt;제작 영상&gt;</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedActivity.links.map((link, i) => (
                            <a 
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="group flex items-center justify-between p-4 bg-zinc-50 border border-zinc-100 rounded-2xl hover:bg-accent hover:border-accent transition-all duration-300"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg group-hover:bg-white/20 transition-colors shadow-sm">
                                  <ExternalLink className="w-4 h-4 text-accent group-hover:text-white" />
                                </div>
                                <span className="text-xs font-bold text-zinc-600 group-hover:text-white">{link.label}</span>
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              <button 
                onClick={() => {
                  setSelectedActivity(null);
                  setSelectedProject(null);
                  setSelectedExperience(null);
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
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-32"
          >
            <div>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-12">
                People-First<span className="text-zinc-900">,</span> <br />
                <span className="text-accent">Business-Driven.</span>
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-accent"></div>
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em]">TA & HR Partner</span>
                </div>
                <div className="flex gap-2">
                  {["recruiting", "branding", "cx"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Integrated About Me */}
            <div id="about" className="flex flex-col md:flex-row gap-16 items-start">
              <div className="flex-1 space-y-10">
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">About Me</p>
                  <h3 className="text-6xl font-bold tracking-tighter">현채은</h3>
                </div>
                <p className="text-3xl md:text-4xl leading-[1.1] text-zinc-900 font-bold tracking-tight max-w-2xl">
                  성장하는 조직의 '인재 밀도'를 높이는 <br />
                  비즈니스 파트너
                </p>
                <div className="flex gap-16 pt-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Focus</p>
                    <p className="text-xl font-bold">HR & Talent Acquisition</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Experience</p>
                    <p className="text-xl font-bold">Recruiting & Employer Branding</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-accent/10 bg-zinc-100">
                <img 
                  src="https://raw.githubusercontent.com/chaeeun-hyun/portfolio/48bb622bd94a2c8a2e9df24e8e1dfd34cfaea8a7/2026%20%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg" 
                  alt="Chaeeun Hyun" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Integrated Skills & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-20 pt-20 border-t border-zinc-100">
              <div className="md:col-span-8 space-y-12">
                <div className="space-y-4">
                  <p className="text-base font-bold uppercase tracking-widest text-accent">Skills</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {skills.map(skill => (
                    <div key={skill.category} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map(item => (
                          <span key={item} className="px-4 py-2 bg-white border border-zinc-100 rounded-xl text-xs font-bold text-zinc-600">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 space-y-12">
                <div className="space-y-4">
                  <p className="text-base font-bold uppercase tracking-widest text-accent">Languages</p>
                </div>
                <div className="space-y-8">
                  {languages.map(lang => (
                    <div key={lang.name} className="flex justify-between items-end border-b border-zinc-100 pb-6 last:border-0">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Language</p>
                        <h4 className="text-2xl font-bold text-zinc-800">{lang.name}</h4>
                      </div>
                      <span className="text-sm font-bold text-accent bg-accent/5 px-4 py-2 rounded-full uppercase tracking-widest">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Work Experience - Full Width or Large */}
          <BentoCard id="experience" title="Work Experience" icon={Briefcase} className="md:col-span-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {workExperiences.map((exp, i) => (
                <div 
                  key={i} 
                  onClick={() => exp.projects && setSelectedExperience(exp)}
                  className={`relative pl-8 border-l border-zinc-100 group ${exp.projects ? 'cursor-pointer' : ''}`}
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-200 group-hover:bg-accent transition-colors" />
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{exp.period}</p>
                      <h4 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{exp.company}</h4>
                      <p className="text-zinc-500 font-medium mb-4">{exp.role}</p>
                    </div>
                    {exp.projects && (
                      <div className="p-2 bg-zinc-50 rounded-full group-hover:bg-accent group-hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {exp.desc.map((d, j) => (
                      <li key={j} className="text-sm text-zinc-600 flex gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  {exp.projects && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view detailed contributions
                    </p>
                  )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        {project.category === "HR" ? "HR SYSTEM IMPROVEMENT" : "LEARNING & DEVELOPMENT"}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-accent transition-colors">{project.title}</h3>
                    </div>
                    <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                      <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

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
