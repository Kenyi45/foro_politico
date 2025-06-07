import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  MapPin, 
  Calendar,
  ExternalLink,
  Download,
  Play,
  BookOpen,
  Globe,
  Award,
  Target,
  Lightbulb,
  MessageSquare,
  Twitter,
  Linkedin,
  Github,
  Instagram
} from 'lucide-react';
import { ThematicAxisDetail, ThematicSession } from '../../types/index';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '../common/Card';
import Button from '../common/Button';

interface ThematicAxisDetailViewProps {
  axis: ThematicAxisDetail;
  onBack: () => void;
}

const ThematicAxisDetailView: React.FC<ThematicAxisDetailViewProps> = ({ axis, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sessions' | 'speakers' | 'resources' | 'schedule'>('overview');

  const getSessionTypeIcon = (type: ThematicSession['type']) => {
    switch (type) {
      case 'panel': return <MessageSquare className="w-5 h-5" />;
      case 'workshop': return <Target className="w-5 h-5" />;
      case 'conference': return <Lightbulb className="w-5 h-5" />;
      case 'debate': return <Users className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getSessionTypeColor = (type: ThematicSession['type']) => {
    switch (type) {
      case 'panel': return 'bg-blue-100 text-blue-800';
      case 'workshop': return 'bg-green-100 text-green-800';
      case 'conference': return 'bg-purple-100 text-purple-800';
      case 'debate': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: ThematicSession['level']) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'document': return <Download className="w-5 h-5" />;
      case 'video': return <Play className="w-5 h-5" />;
      case 'book': return <BookOpen className="w-5 h-5" />;
      case 'article': return <MessageSquare className="w-5 h-5" />;
      case 'website': return <Globe className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return <Twitter className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'github': return <Github className="w-4 h-4" />;
      case 'instagram': return <Instagram className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const tabs = [
    { id: 'overview', label: 'Visión General', icon: <Target className="w-4 h-4" /> },
    { id: 'sessions', label: 'Sesiones', icon: <Calendar className="w-4 h-4" /> },
    { id: 'speakers', label: 'Ponentes', icon: <Users className="w-4 h-4" /> },
    { id: 'resources', label: 'Recursos', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'schedule', label: 'Cronograma', icon: <Clock className="w-4 h-4" /> }
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-white/10 mb-6"
            icon={<ArrowLeft />}
          >
            Volver a Ejes Temáticos
          </Button>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="title-section text-white mb-2">{axis.title}</h1>
                <p className="subtitle-section text-white/90">{axis.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{axis.sessions.length}</div>
                <div className="text-white/80">Sesiones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{axis.speakers.length}</div>
                <div className="text-white/80">Expertos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{axis.resources.length}</div>
                <div className="text-white/80">Recursos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-600 hover:text-primary-600'
                }`}
              >
                {tab.icon}
                <span className="nav-text">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Long Description */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Descripción Detallada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-institutional text-neutral-700 leading-relaxed">
                  {axis.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Objectives */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Objetivos Principales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {axis.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-600 text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-neutral-700">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Artículos Relacionados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {axis.relatedArticles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <span className="text-neutral-700">{article}</span>
                      <Button variant="ghost" size="sm" icon={<ExternalLink />}>
                        Leer
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'sessions' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {axis.sessions.map((session) => (
              <Card key={session.id} variant="elevated" hover="lift">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getSessionTypeColor(session.type)}`}>
                        {getSessionTypeIcon(session.type)}
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSessionTypeColor(session.type)}`}>
                          {session.type}
                        </span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(session.level)}`}>
                      {session.level}
                    </span>
                  </div>
                  <CardTitle>{session.title}</CardTitle>
                  <CardDescription>{session.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{session.duration} min</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{session.capacity} personas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'speakers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {axis.speakers.map((speaker) => (
              <Card key={speaker.id} variant="elevated" hover="lift">
                <CardContent>
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="title-card text-neutral-900 mb-1">{speaker.name}</h3>
                      <p className="text-political text-primary-600 mb-1">{speaker.position}</p>
                      <p className="text-sm text-neutral-600">{speaker.organization}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        <MapPin className="w-4 h-4 text-neutral-400" />
                        <span className="text-sm text-neutral-600">{speaker.country}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-institutional text-neutral-700 mb-4">{speaker.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">Áreas de Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    {Object.entries(speaker.socialMedia).map(([platform, handle]) => (
                      <a
                        key={platform}
                        href={`https://${platform}.com/${handle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-neutral-100 hover:bg-primary-100 rounded-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors"
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {axis.resources.map((resource) => (
              <Card key={resource.id} variant="elevated" hover="lift">
                <CardContent>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      {getResourceIcon(resource.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900 mb-1">{resource.title}</h3>
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-neutral-600 mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">{resource.language}</span>
                    <Button 
                      variant="primary" 
                      size="sm"
                      icon={<ExternalLink />}
                      onClick={() => window.open(resource.url, '_blank')}
                    >
                      Acceder
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-8">
            {axis.schedule.map((item) => {
              const session = axis.sessions.find(s => s.id === item.sessionId);
              return (
                <Card key={item.id} variant="elevated">
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div className="text-center lg:text-left">
                        <div className="text-lg font-bold text-primary-600">{formatDate(item.date)}</div>
                        <div className="text-neutral-600">{item.startTime} - {item.endTime}</div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-neutral-900 mb-2">{session?.title}</h3>
                        <p className="text-neutral-600 text-sm">{session?.description}</p>
                      </div>
                      
                      <div className="text-center lg:text-right">
                        <div className="flex items-center space-x-2 text-neutral-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        {session && (
                          <div className="flex items-center space-x-2 text-neutral-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{session.duration} min</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThematicAxisDetailView; 