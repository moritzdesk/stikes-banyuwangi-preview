import React from 'react'

export default function Logo() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontWeight: 'bold',
      fontSize: '18px',
      padding: '8px 0'
    }}>
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '22px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(14, 165, 233, 0.4)',
        transition: 'transform 0.2s',
      }}>
        U
      </div>
      <div>
        <div style={{ 
          lineHeight: '1.2', 
          color: '#0f172a',
          fontWeight: '700',
          fontSize: '18px',
          letterSpacing: '-0.5px'
        }}>
          Unidsoe
        </div>
        <div style={{ 
          fontSize: '11px', 
          fontWeight: '500', 
          color: '#64748b',
          lineHeight: '1',
          letterSpacing: '0.5px',
          textTransform: 'uppercase'
        }}>
          Content Management
        </div>
      </div>
    </div>
  )
}

