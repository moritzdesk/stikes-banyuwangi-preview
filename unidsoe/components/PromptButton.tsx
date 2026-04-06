/**
 * Simple Prompt Button Component
 * Bisa digunakan sebagai custom action di document
 */

import React, { useState } from 'react';

export default function PromptButton() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handlePrompt = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      // Get token from localStorage
      const token = localStorage.getItem('sanity_api_token');
      if (!token) {
        alert('API token not found!\n\nOpen browser console (F12) and run:\nlocalStorage.setItem("sanity_api_token", "your-token")');
        return;
      }

      // Call Sanity API - Use project hostname
      const response = await fetch(
        `https://iwtyom29.api.sanity.io/vX/data/actions/iwtyom29/production/prompt`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            instruction: prompt,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      setResult(typeof data === 'string' ? data : JSON.stringify(data, null, 2));
    } catch (error: any) {
      alert(`Error: ${error.message}`);
      console.error('Prompt error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <h3 style={{ marginBottom: '12px' }}>💬 AI Prompt Assistant</h3>
      
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt (e.g., 'Give me 5 blog post ideas')"
        style={{
          width: '100%',
          minHeight: '80px',
          padding: '8px',
          marginBottom: '12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
        disabled={loading}
      />

      <button
        onClick={handlePrompt}
        disabled={loading || !prompt.trim()}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ccc' : '#0ea5e9',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: '600',
        }}
      >
        {loading ? '⏳ Generating...' : '🚀 Generate'}
      </button>

      {result && (
        <div style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: '#f0f9ff',
          border: '1px solid #0ea5e9',
          borderRadius: '4px',
        }}>
          <div style={{ fontWeight: '600', marginBottom: '8px' }}>✅ Result:</div>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '14px',
            margin: 0,
          }}>
            {result}
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            style={{
              marginTop: '8px',
              padding: '6px 12px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            📋 Copy
          </button>
        </div>
      )}
    </div>
  );
}

