/**
 * Custom Tool untuk Agent Actions Prompt
 * Bisa diakses dari Studio toolbar
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

export default function PromptTool() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [format, setFormat] = useState<'text' | 'json'>('text');
  const [temperature, setTemperature] = useState(0.7);

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
        format: format === 'json' ? 'json' : undefined,
        temperature: temperature,
      });

      setResult(typeof response === 'string' ? response : JSON.stringify(response, null, 2));
    } catch (err: any) {
      setError(err.message || 'Failed to get prompt response');
      console.error('Prompt error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px', color: '#0f172a' }}>
        💬 AI Prompt Assistant
      </h1>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Enter your prompt:
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'Give me 5 blog post ideas for Unidsoe university about health sciences'"
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontFamily: 'inherit',
            fontSize: '14px',
            resize: 'vertical',
          }}
          disabled={loading}
        />
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>
            Output Format:
          </label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as 'text' | 'json')}
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
            disabled={loading}
          >
            <option value="text">Text</option>
            <option value="json">JSON</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>
            Temperature: {temperature}
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            style={{ width: '150px' }}
            disabled={loading}
          />
          <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
            Higher = more creative
          </div>
        </div>
      </div>

      <button
        onClick={handlePrompt}
        disabled={loading || !prompt.trim()}
        style={{
          padding: '12px 24px',
          backgroundColor: loading ? '#ccc' : '#0ea5e9',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: '600',
          fontSize: '16px',
          marginBottom: '24px',
        }}
      >
        {loading ? '⏳ Generating...' : '🚀 Generate Response'}
      </button>

      {error && (
        <div style={{
          padding: '16px',
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          borderRadius: '8px',
          marginBottom: '16px',
          fontSize: '14px',
        }}>
          ❌ {error}
        </div>
      )}

      {result && (
        <div style={{
          padding: '20px',
          backgroundColor: '#f8fafc',
          border: '2px solid #0ea5e9',
          borderRadius: '8px',
        }}>
          <div style={{ marginBottom: '12px', fontWeight: '600', color: '#0ea5e9', fontSize: '18px' }}>
            ✅ Response:
          </div>
          <pre style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '14px',
            lineHeight: '1.6',
            margin: 0,
            padding: '12px',
            backgroundColor: 'white',
            borderRadius: '4px',
            border: '1px solid #e0e0e0',
          }}>
            {result}
          </pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(result);
              alert('Copied to clipboard!');
            }}
            style={{
              marginTop: '12px',
              padding: '8px 16px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            📋 Copy to Clipboard
          </button>
        </div>
      )}

      <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '8px', fontSize: '14px' }}>
        <div style={{ fontWeight: '600', marginBottom: '8px' }}>💡 Use Cases:</div>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>Generate blog post ideas</li>
          <li>Suggest SEO keywords</li>
          <li>Create social media captions</li>
          <li>Analyze content</li>
          <li>Brainstorm topics</li>
        </ul>
      </div>
    </div>
  );
}

