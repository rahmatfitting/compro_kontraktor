'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Project, ProjectType } from '@/data/projects';
import { useState, useMemo, useEffect } from 'react';
import { Home, Building2, Wrench, Search, Filter, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import L from 'leaflet';

// Custom marker icons for different project types
const getIcon = (type: ProjectType) => {
  const colors = {
    rumah: '#d4af37', // Gold
    ruko: '#1e293b',  // Dark Slate
    renovasi: '#64748b' // Slate
  };
  
  const iconHtml = type === 'rumah' ? '🏠' : type === 'ruko' ? '🏢' : '🔧';
  
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: white; 
      width: 40px; 
      height: 40px; 
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      border: 3px solid ${colors[type]};
    ">
      <span style="font-size: 20px;">${iconHtml}</span>
    </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

type Props = {
  projects: Project[];
};

export default function ProjectMap({ projects }: Props) {
  const [filterType, setFilterType] = useState<ProjectType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchType = filterType === 'all' || p.type === filterType;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchSearch;
    });
  }, [filterType, searchQuery, projects]);

  const stats = useMemo(() => {
    const cities = new Set(projects.map(p => p.city));
    return {
      total: projects.length,
      cities: cities.size,
      types: projects.reduce((acc, p) => {
        acc[p.type] = (acc[p.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }, [projects]);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Stats Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '10px'
      }}>
        {[
          { label: 'Total Proyek', value: stats.total, icon: <Building2 size={20} /> },
          { label: 'Kota Jangkauan', value: stats.cities, icon: <MapPin size={20} /> },
          { label: 'Rumah Mewah', value: stats.types['rumah'] || 0, icon: <Home size={20} /> },
          { label: 'Ruko & Kantor', value: stats.types['ruko'] || 0, icon: <Building2 size={20} /> },
        ].map((item, i) => (
          <div key={i} style={{
            background: 'white',
            padding: '24px',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <div style={{ color: 'var(--accent-gold)' }}>{item.icon}</div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>{item.value}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '4px', letterSpacing: '1px' }}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Control Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {(['all', 'rumah', 'ruko', 'renovasi'] as const).map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              style={{
                padding: '10px 20px',
                background: filterType === type ? 'var(--bg-dark)' : 'white',
                color: filterType === type ? 'white' : 'var(--text-primary)',
                border: `1px solid ${filterType === type ? 'var(--bg-dark)' : 'var(--border-subtle)'}`,
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {type === 'all' ? 'Semua' : type === 'rumah' ? 'Hunian' : type === 'ruko' ? 'Komersial' : 'Renovasi'}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
          <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input
            type="text"
            placeholder="Cari lokasi atau nama proyek..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 15px 12px 45px',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
          />
        </div>
      </div>

      {/* Map Container */}
      <div style={{
        height: '600px',
        width: '100%',
        border: '1px solid var(--border-subtle)',
        position: 'relative',
        zIndex: 1
      }}>
        <MapContainer
          center={[-2.5, 118]} // Center of Indonesia
          zoom={5}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {filteredProjects.map((project) => (
            <Marker
              key={project.id}
              position={[project.lat, project.lng]}
              icon={getIcon(project.type)}
            >
              <Popup maxWidth={320}>
                <div style={{ width: '280px', padding: '0' }}>
                  <div style={{
                    width: '100%',
                    height: '160px',
                    background: 'var(--bg-tertiary)',
                    marginBottom: '15px',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                  </div>
                  
                  <div style={{ padding: '0 5px' }}>
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)',
                      letterSpacing: '1px'
                    }}>
                      {project.type} • {project.year}
                    </span>
                    <h3 style={{
                      margin: '4px 0 8px',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      lineHeight: 1.2
                    }}>
                      {project.name}
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <MapPin size={14} /> {project.city}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <ExternalLink size={14} /> {project.value}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/6281234567890?text=Halo Arkana, saya tertarik dengan proyek ${project.name} di ${project.city}. Bisa bantu info detail?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        width: '100%',
                        padding: '12px',
                        background: 'var(--bg-dark)',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'opacity 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <MessageCircle size={16} /> Konsultasi Proyek Ini
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
          
          <MapController filteredProjects={filteredProjects} />
        </MapContainer>
      </div>

      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          border-radius: 0px !important;
          padding: 0 !important;
          overflow: hidden;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          width: auto !important;
        }
        .leaflet-container {
          font-family: var(--font-primary) !important;
        }
      `}</style>
    </div>
  );
}

// Internal component to handle map movement when filters change
function MapController({ filteredProjects }: { filteredProjects: Project[] }) {
  const map = useMap();
  
  useEffect(() => {
    if (filteredProjects.length === 0) return;
    
    if (filteredProjects.length === 1) {
      map.setView([filteredProjects[0].lat, filteredProjects[0].lng], 13);
    } else {
      const bounds = L.latLngBounds(filteredProjects.map(p => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [filteredProjects, map]);

  return null;
}

