/**
 * Custom Input Component untuk Agent Actions Prompt
 * Bisa digunakan di field untuk generate ideas/suggestions via UI
 */

import React, { useState } from 'react';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'iwtyom29',
  dataset: 'production',
  apiVersion: 'vX',
  token: typeof window !== 'undefined' 
    ? localStorage.getItem('sanity_api_token') || ''
    : '',
  useCdn: false,
});

interface PromptInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function PromptInput(props: PromptInputProps) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePrompt = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const token = localStorage.getItem('sanity_api_token');
      if (!token) {
        throw new Error('API token not found. Please set it in localStorage.');
      }

      const response = await client.agent.action.prompt({
        instruction: prompt,
      });

      setResult(typeof response === 'string' ? response : JSON.stringify(response, null, 2));
      
      // Auto-fill result to field if onChange provided
      if (props.onChange && typeof response === 'string') {
        props.onChange(response);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to get prompt response');
      console.error('Prompt error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', marginTop: '8px' }}>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          💬 AI Prompt Assistant
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt (e.g., 'Give me 5 blog post ideas for Unidsoe')"
          style={{
            width: '100%',
            minHeight: '80px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'inherit',
            fontSize: '14px',
          }}
          disabled={loading}
        />
      </div>

      <button
        onClick={handlePrompt}
        disabled={loading || !prompt.trim()}
        style={{
          padding: '8px 16px',
          backgroundColor: loading ? '#ccc' : '#0ea5e9',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: '600',
          marginBottom: '12px',
        }}
      >
        {loading ? '⏳ Generating...' : '🚀 Generate'}
      </button>

      {error && (
        <div style={{
          padding: '12px',
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          borderRadius: '4px',
          marginTop: '12px',
          fontSize: '14px',
        }}>
          ❌ {error}
        </div>
      )}

      {result && (
        <div style={{
          padding: '12px',
          backgroundColor: '#f0f9ff',
          border: '1px solid #0ea5e9',
          borderRadius: '4px',
          marginTop: '12px',
        }}>
          <div style={{ marginBottom: '8px', fontWeight: '600', color: '#0ea5e9' }}>
            ✅ Result:
          </div>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '14px',
            lineHeight: '1.5',
            margin: 0,
          }}>
            {result}
          </pre>
          <button
            onClick={() => {
              if (props.onChange && typeof result === 'string') {
                props.onChange(result);
              }
            }}
            style={{
              marginTop: '8px',
              padding: '6px 12px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            📋 Use This Result
          </button>
        </div>
      )}

      <div style={{ marginTop: '12px', fontSize: '12px', color: '#666' }}>
        💡 Tip: Use this to generate ideas, suggestions, or analyze content
      </div>
    </div>
  );
}

